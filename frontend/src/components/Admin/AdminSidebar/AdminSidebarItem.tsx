import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useAdminTitle } from "../../../contexts/AdminTitleContext";
import { useEffect } from "react";

interface AdminSidebarItemProps {
  icon: React.ReactNode;
  title: string;
  to: string;
}

export const AdminSidebarItem = ({
  icon,
  title,
  to,
}: AdminSidebarItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const { setTitle } = useAdminTitle();

  useEffect(() => {
    if (isActive) {
      setTitle(title);
    }
  }, [isActive, title, setTitle]);

  return (
    <ListItem disablePadding>
      <ListItemButton
        component={Link}
        to={to}
        sx={{
          borderRadius: 1,
          mb: 0.5,
          bgcolor: isActive ? "rgba(71, 130, 218, 0.15)" : "transparent",
          color: isActive ? "#4782DA" : "#637381",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            bgcolor: isActive
              ? "rgba(71, 130, 218, 0.15)"
              : "rgba(99, 115, 129, 0.08)",
            color: "#FF7043",
            "& .MuiListItemIcon-root": {
              color: "#FF7043",
            },
          },
          "& .MuiListItemIcon-root": {
            color: isActive ? "#4782DA" : "#637381",
            minWidth: 40,
            transition: "color 0.2s ease-in-out",
          },
        }}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText
          primary={title}
          primaryTypographyProps={{
            sx: {
              fontWeight: isActive ? 600 : 500,
              fontSize: "0.875rem",
            },
          }}
        />
      </ListItemButton>
    </ListItem>
  );
};
