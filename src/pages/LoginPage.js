import {
  Container,
  TextField,
  Button,
  Paper,
  Typography,
  Stack,
} from "@mui/material";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [u, setU] = useState("");
  const [p, setP] = useState("");

  const submit = () => {
    if (login(u, p)) {
      navigate(params.get("redirect") || "/");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h5" mb={2}>
          Login
        </Typography>
        <Stack spacing={2}>
          <TextField label="Username" onChange={(e) => setU(e.target.value)} />
          <TextField
            label="Password"
            type="password"
            onChange={(e) => setP(e.target.value)}
          />
          <Button variant="contained" onClick={submit}>
            Login
          </Button>
          <Typography variant="caption">Demo: admin / admin123</Typography>
        </Stack>
      </Paper>
    </Container>
  );
}
