import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Box, useTheme, useMediaQuery, Drawer } from "@mui/material";
import AdminSidebar from "../components/Admin/AdminSidebar";
import AdminHeader from "../components/Admin/AdminHeader";

export const AdminLayout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isSidebarOpen, setIsSidebarOpen] = useState(!isMobile);

  // 画面サイズが変更されたときにサイドバーの状態を更新
  useEffect(() => {
    setIsSidebarOpen(!isMobile);
  }, [isMobile]);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const sidebarContent = (
    <Box
      sx={{
        width: 260,
        height: "100vh",
        overflow: "hidden",
        bgcolor: "background.paper",
        borderRight: "1px solid",
        borderColor: "divider",
      }}
    >
      <AdminSidebar />
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      {/* モバイル用サイドバー（Drawer） */}
      {isMobile ? (
        <Drawer
          variant="temporary"
          open={isSidebarOpen}
          onClose={handleToggleSidebar}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": { width: 260, boxSizing: "border-box" },
          }}
        >
          {sidebarContent}
        </Drawer>
      ) : (
        // デスクトップ用サイドバー
        <Box
          sx={{
            width: isSidebarOpen ? 260 : 0,
            flexShrink: 0,
            transition: "width 0.3s ease",
            overflow: "hidden",
          }}
        >
          {sidebarContent}
        </Box>
      )}

      {/* メインコンテンツエリア */}
      <Box
        sx={{
          flexGrow: 1,
          width: {
            xs: "100%",
            md: `calc(100% - ${isSidebarOpen ? 260 : 0}px)`,
          },
          ml: { xs: 0, md: isSidebarOpen ? "260px" : 0 },
          transition: "margin-left 0.3s ease",
        }}
      >
        <AdminHeader
          onToggleSidebar={handleToggleSidebar}
          isSidebarOpen={isSidebarOpen}
          isMobile={isMobile}
        />
        <Box
          component="main"
          sx={{
            p: { xs: 2, sm: 3 },
            mt: { xs: 7, sm: 8 },
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};
