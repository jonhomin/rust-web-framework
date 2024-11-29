import { Typography, Paper } from "@mui/material";

export const AdminHome = () => {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Admin Dashboard
      </Typography>
      <Typography variant="body1">
        Welcome to the admin area. This is your dashboard.
      </Typography>
    </Paper>
  );
};
