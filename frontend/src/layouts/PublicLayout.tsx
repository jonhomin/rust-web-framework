import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

export const PublicLayout = () => {
  return (
    <Container maxWidth="lg">
      <Outlet />
    </Container>
  );
};
