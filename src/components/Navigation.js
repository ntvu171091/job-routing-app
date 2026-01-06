import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  InputBase,
  Box,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useTheme } from "../contexts/ThemeContext";
import { useState } from "react";

export default function Navigation() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [search, setSearch] = useState(params.get("q") || "");
  const { isAuthenticated, user, logout } = useAuth();
  const { toggleTheme } = useTheme();

  const submitSearch = () => {
    search ? navigate(`/?q=${encodeURIComponent(search)}`) : navigate("/");
  };

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ gap: 2 }}>
        <Typography
          variant="h6"
          sx={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          Job Board
        </Typography>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            bgcolor: "background.paper",
            px: 2,
            borderRadius: 1,
          }}
        >
          <Search />
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search jobs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submitSearch()}
          />
        </Box>

        <Button color="inherit" onClick={toggleTheme}>
          Theme
        </Button>

        {isAuthenticated ? (
          <>
            <Typography>{user.username}</Typography>
            <Button
              color="inherit"
              onClick={() => {
                logout();
                navigate("/");
              }}
            >
              Logout
            </Button>
          </>
        ) : (
          <Button color="inherit" onClick={() => navigate("/login")}>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
