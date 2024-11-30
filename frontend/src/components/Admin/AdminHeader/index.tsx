import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import {
  Menu as MenuIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import { useAdminTitle } from "../../../contexts/AdminTitleContext";

interface AdminHeaderProps {
  onToggleSidebar?: () => void;
  isSidebarOpen?: boolean;
  isMobile?: boolean;
}

const AdminHeader = ({
  onToggleSidebar,
  isSidebarOpen,
  isMobile,
}: AdminHeaderProps) => {
  const { title } = useAdminTitle();

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "white",
        color: "text.primary",
        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
        width: {
          xs: "100%",
          md: `calc(100% - ${isSidebarOpen && !isMobile ? 260 : 0}px)`,
        },
        ml: {
          xs: 0,
          md: isSidebarOpen && !isMobile ? "260px" : 0,
        },
        transition: "all 0.3s ease",
      }}
    >
      <Toolbar sx={{ minHeight: { xs: 56, sm: 64 } }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={onToggleSidebar}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          variant="h6"
          component="h1"
          sx={{
            fontSize: { xs: "1.1rem", sm: "1.25rem" },
            fontWeight: 600,
          }}
        >
          {title}
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Box
          sx={{ display: "flex", alignItems: "center", gap: { xs: 1, sm: 2 } }}
        >
          <IconButton color="inherit">
            <SettingsIcon />
          </IconButton>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 500,
                display: { xs: "none", sm: "block" },
              }}
            >
              Yamada Tarou
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AdminHeader;
