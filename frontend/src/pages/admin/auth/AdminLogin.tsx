import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import { Email as EmailIcon, Lock as LockIcon } from "@mui/icons-material";

export const AdminLogin = () => {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 400,
        mx: "auto",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.2)",
        borderRadius: 2,
      }}
    >
      <CardContent sx={{ p: 4 }}>
        <Box sx={{ mb: 4, textAlign: "center" }}>
          <Box
            component="img"
            src="/rust-admin-logo.svg"
            alt="Logo"
            sx={{ width: "80%", maxWidth: 200 }}
          />
        </Box>

        <Typography
          variant="h4"
          component="h1"
          sx={{ mb: 4, textAlign: "center", fontWeight: 600 }}
        >
          Login
        </Typography>

        <Box component="form" sx={{ "& > :not(style)": { mb: 2 } }}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            InputProps={{
              startAdornment: <EmailIcon color="action" sx={{ mr: 1 }} />,
            }}
          />
          <TextField
            fullWidth
            type="password"
            label="Password"
            variant="outlined"
            InputProps={{
              startAdornment: <LockIcon color="action" sx={{ mr: 1 }} />,
            }}
          />
          <Button
            fullWidth
            size="large"
            variant="contained"
            color="primary"
            sx={{ mt: 2, borderRadius: 2 }}
          >
            Login
          </Button>
        </Box>

        <Box sx={{ mt: 2, textAlign: "center" }}>
          <Link href="#" variant="body2" color="text.secondary">
            forgot password?
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
};
