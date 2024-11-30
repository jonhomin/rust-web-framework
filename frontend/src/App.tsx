import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Router } from "./router";
import { AdminTitleProvider } from "./contexts/AdminTitleContext";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AdminTitleProvider>
        <Router />
      </AdminTitleProvider>
    </ThemeProvider>
  );
};

export default App;
