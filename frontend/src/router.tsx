import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicLayout } from "./layouts/PublicLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import { Home } from "./pages/public/Home";
import { AdminHome } from "./pages/admin/AdminHome";
import { AdminUserList } from "./pages/admin/AdminUserList";
import { AdminAuthLayout } from "./layouts/AdminAuthLayout";
import { AdminLogin } from "./pages/admin/auth/AdminLogin";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* Admin auth routes */}
        <Route path="/admin/auth" element={<AdminAuthLayout />}>
          <Route path="login" element={<AdminLogin />} />
        </Route>

        {/* Admin routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
          <Route path="users" element={<AdminUserList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
