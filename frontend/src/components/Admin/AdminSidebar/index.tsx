import { Box } from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import { AdminSidebarItem } from "./AdminSidebarItem";
import { AdminSidebarSection } from "./AdminSidebarSection";

const AdminSidebar = () => {
  return (
    <Box
      sx={{
        width: 260,
        height: "100vh",
        bgcolor: "#ffffff",
        borderRight: "1px solid",
        borderColor: "divider",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          p: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src="/rust-admin-logo.svg"
          alt="Rust Admin"
          sx={{
            width: "80%",
            height: "auto",
          }}
        />
      </Box>

      <Box sx={{ flex: 1, overflow: "auto", px: 2 }}>
        <AdminSidebarSection title="Dashboard">
          <AdminSidebarItem icon={<DashboardIcon />} title="Home" to="/admin" />
        </AdminSidebarSection>

        <AdminSidebarSection title="Users">
          <AdminSidebarItem
            icon={<PersonIcon />}
            title="User List"
            to="/admin/users"
          />
        </AdminSidebarSection>
      </Box>
    </Box>
  );
};

export default AdminSidebar;
