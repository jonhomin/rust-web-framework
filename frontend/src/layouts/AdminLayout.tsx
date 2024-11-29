import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import AdminSidebar from "../components/Admin/AdminSidebar";

export const AdminLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <AdminSidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
};
