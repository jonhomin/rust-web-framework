import { Outlet } from "react-router-dom";
import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";

export const AdminLayout = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Admin Dashboard</Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ flex: 1, py: 4 }}>
        <Outlet />
      </Container>
    </Box>
  );
};
