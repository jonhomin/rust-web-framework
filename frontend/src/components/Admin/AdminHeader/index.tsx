import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Avatar,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";

interface AdminHeaderProps {
  onToggleSidebar?: () => void;
  isSidebarOpen?: boolean;
}

const AdminHeader = ({ onToggleSidebar, isSidebarOpen }: AdminHeaderProps) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "white",
        color: "text.primary",
        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
        width: `calc(100% - ${isSidebarOpen ? 260 : 0}px)`,
        ml: `${isSidebarOpen ? 260 : 0}px`,
        transition: "all 0.3s ease",
      }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={onToggleSidebar}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton color="inherit">
            <SettingsIcon />
          </IconButton>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              Yamada Tarou
            </Typography>
            <Avatar
              sx={{
                width: 32,
                height: 32,
                backgroundColor: "primary.main",
              }}
            >
              YT
            </Avatar>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AdminHeader;
