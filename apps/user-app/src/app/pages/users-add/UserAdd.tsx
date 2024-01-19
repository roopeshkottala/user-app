import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import {
  Alert,
  Box,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import Title from '../../components/Title';
import { IUser, userValidation } from '@user-app/shared';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { saveUser } from '../../apis/apis';

interface ISaveConfirmPoupUpContent {
  isOpen: boolean;
  type: 'success' | 'error';
  details: string;
}

export default function UserAdd() {
  const [loading, setLoading] = useState(false);
  const [inputFields, setInputFields] = useState<IUser>({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [inputFieldsError, setInputFieldsError] = useState<IUser>({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [saveConfirmPoupUpContent, setSaveConfirmPoupUpContent] =
    useState<ISaveConfirmPoupUpContent>({
      isOpen: false,
      type: 'success',
      details: '',
    });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
    setInputFieldsError({
      ...inputFieldsError,
      [e.target.name]: '',
    });
  };

  const mutation = useMutation(
    (user: IUser) => {
      return saveUser(user);
    },
    {
      onSuccess: (resp) => {
        setLoading(false);
        setSaveConfirmPoupUpContent({
          isOpen: true,
          details: `User '${inputFields.firstName} ${inputFields.lastName}' added`,
          type: 'success',
        });
      },
      onError: (error, variables, context) => {
        setSaveConfirmPoupUpContent({
          isOpen: true,
          details: (error as any)?.message,
          type: 'error',
        });
        setLoading(false);
      },
    }
  );

  const handleSave = () => {
    const [isError, error] = userValidation(inputFields);
    if (isError) {
      setInputFieldsError(error);
    } else {
      setLoading(true);
      mutation.mutate({
        firstName: inputFields.firstName,
        lastName: inputFields.lastName,
        email: inputFields.email,
      });
    }
  };
  const handleSaveConfirmPoupUpClose = () => {
    if (saveConfirmPoupUpContent.type === 'success') {
      setInputFields({
        firstName: '',
        lastName: '',
        email: '',
      });
    }
    setSaveConfirmPoupUpContent({
      isOpen: false,
      details: '',
      type: 'success',
    });
  };

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Title> Add New User</Title>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              error={!!inputFieldsError.firstName}
              helperText={inputFieldsError.firstName}
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="given-name"
              variant="standard"
              value={inputFields.firstName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              error={!!inputFieldsError.lastName}
              helperText={inputFieldsError.lastName}
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="family-name"
              variant="standard"
              value={inputFields.lastName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              error={!!inputFieldsError.email}
              helperText={inputFieldsError.email}
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
              variant="standard"
              value={inputFields.email}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <LoadingButton
            variant="contained"
            onClick={() => {
              handleSave();
            }}
            sx={{ mt: 3, ml: 1 }}
            loading={loading}
          >
            Save
          </LoadingButton>
        </Box>
      </Paper>
      <Dialog open={saveConfirmPoupUpContent.isOpen} fullWidth={true}>
        <DialogTitle>
          <Alert severity={saveConfirmPoupUpContent.type}>
            {saveConfirmPoupUpContent.type === 'success'
              ? 'Saved!'
              : 'Something went wronng!'}
          </Alert>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {saveConfirmPoupUpContent.details}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <LoadingButton
            autoFocus
            onClick={() => {
              handleSaveConfirmPoupUpClose();
            }}
          >
            Close
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
