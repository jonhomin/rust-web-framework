import { Box } from "@mui/material";
import {
  Dashboard as DashboardIcon,
  PieChart as StatisticsIcon,
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

        <AdminSidebarSection title="Widget">
          <AdminSidebarItem
            icon={<StatisticsIcon />}
            title="Statistics"
            to="/admin/statistics"
          />
        </AdminSidebarSection>
      </Box>
    </Box>
  );
};

export default AdminSidebar;
