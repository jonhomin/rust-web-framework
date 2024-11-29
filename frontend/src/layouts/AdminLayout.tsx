import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import AdminSidebar from "../components/Admin/AdminSidebar";
import AdminHeader from "../components/Admin/AdminHeader";

export const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* サイドバー */}
      <Box
        sx={{
          width: isSidebarOpen ? 260 : 0,
          transition: "width 0.3s ease",
          overflow: "hidden",
          position: "fixed",
          left: 0,
          top: 0,
          height: "100vh",
          bgcolor: "background.paper",
          borderRight: "1px solid",
          borderColor: "divider",
          zIndex: (theme) => theme.zIndex.drawer,
        }}
      >
        <AdminSidebar />
      </Box>

      {/* メインコンテンツエリア（ヘッダー含む） */}
      <Box
        sx={{
          flexGrow: 1,
          marginLeft: isSidebarOpen ? "260px" : 0,
          transition: "margin-left 0.3s ease",
          minHeight: "100vh",
        }}
      >
        <AdminHeader
          onToggleSidebar={handleToggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />
        <Box
          component="main"
          sx={{
            p: 3,
            mt: 8,
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};
