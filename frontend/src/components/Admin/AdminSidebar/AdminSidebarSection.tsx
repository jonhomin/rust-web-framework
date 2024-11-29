import { Typography, List } from "@mui/material";

interface AdminSidebarSectionProps {
  title: string;
  children: React.ReactNode;
}

export const AdminSidebarSection = ({
  title,
  children,
}: AdminSidebarSectionProps) => {
  return (
    <div>
      <Typography
        variant="subtitle2"
        sx={{
          fontSize: "0.75rem",
          fontWeight: 600,
          color: "#212B36",
          px: 1,
          mt: 2,
          mb: 1,
          textTransform: "uppercase",
          letterSpacing: "0.5px",
        }}
      >
        {title}
      </Typography>
      <List disablePadding>{children}</List>
    </div>
  );
};
