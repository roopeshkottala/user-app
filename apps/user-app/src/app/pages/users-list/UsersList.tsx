import { Container, Link, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Title from '../../components/Title';
import { useQuery } from 'react-query';
import { getUsers } from '../../apis/apis';
import SkeltonTableLoading from '../../components/SkeltonTableLoading';
const columns: GridColDef[] = [
  { field: 'firstName', headerName: 'First name', flex: 1 },
  { field: 'lastName', headerName: 'Last name', flex: 1 },
  { field: 'email', headerName: 'Email', flex: 1 },
];

function UsersList() {
  const { data, status, error } = useQuery('getUsers', getUsers);
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Paper
        sx={{ p: 2, display: 'flex', flexDirection: 'column', minHeight: 400 }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Title>Users</Title>
          </Grid>
          <Grid item xs={12}>
            {status === 'loading' && <SkeltonTableLoading />}
            {status === 'error' && (
              <Typography variant="h6" color="text.secondary" align="center">
                Something went worng!
                <br />
                {(error as any)?.message}
              </Typography>
            )}
            {status === 'success' && data.length === 0 && (
              <Typography variant="h6" color="text.secondary" align="center">
                No Users found!&nbsp;&nbsp;&nbsp;
                <Link color="inherit" href="/user">
                  Click here to add a new user
                </Link>
              </Typography>
            )}
            {status === 'success' && data.length > 0 && (
              <DataGrid
                getRowId={(row) => row._id}
                rows={data}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                  },
                }}
                pageSizeOptions={[5, 10]}
              />
            )}
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default UsersList;
