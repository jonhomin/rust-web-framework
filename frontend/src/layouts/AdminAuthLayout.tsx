import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

export const AdminAuthLayout = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f5f5f5",
        padding: 3,
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 400 }}>
        <Outlet />
      </Box>
    </Box>
  );
};
