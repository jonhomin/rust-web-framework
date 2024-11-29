import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicLayout } from "./layouts/PublicLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import { Home } from "./pages/public/Home";
import { AdminHome } from "./pages/admin/AdminHome";
import { AdminUserList } from "./pages/admin/AdminUserList";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* Admin routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
        </Route>
        <Route path="/admin/users" element={<AdminLayout />}>
          <Route index element={<AdminUserList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
