import { Skeleton, Stack } from '@mui/material';

export default function SkeltonTableLoading() {
  return (
    <Stack spacing={1}>
      <Skeleton variant="rectangular" height={40} />
      <Skeleton variant="rectangular" height={40} />
      <Skeleton variant="rectangular" height={40} />
      <Skeleton variant="rectangular" height={40} />
      <Skeleton variant="rectangular" height={40} />
    </Stack>
  );
}
