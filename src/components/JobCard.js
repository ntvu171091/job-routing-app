import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
  Stack,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function JobCard({ job }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const openDetail = () => {
    isAuthenticated
      ? navigate(`/job/${job.id}`)
      : navigate(`/login?redirect=/job/${job.id}`);
  };

  return (
    <Card
      sx={{
        bgcolor: "#3a3a3a",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        borderRadius: 2,
        boxShadow: "0 12px 30px rgba(0,0,0,0.4)",
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        {/* TITLE */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {job.title}
        </Typography>

        <Divider sx={{ mb: 1, bgcolor: "rgba(255,255,255,0.15)" }} />

        {/* SKILLS */}
        <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
          {job.skills.slice(0, 3).map((s, i) => (
            <Chip
              key={i}
              label={s}
              size="small"
              sx={{
                bgcolor: "#e53935",
                color: "#fff",
                fontWeight: 500,
              }}
            />
          ))}
        </Stack>

        {/* DESCRIPTION */}
        <Typography variant="body2" sx={{ opacity: 0.9 }}>
          {job.description.slice(0, 120)}...
        </Typography>
      </CardContent>

      {/* ACTION */}
      <CardActions sx={{ justifyContent: "center", pb: 3 }}>
        <Button
          variant="contained"
          onClick={openDetail}
          sx={{
            bgcolor: "#ffb300",
            color: "#000",
            fontWeight: "bold",
            px: 4,
            "&:hover": {
              bgcolor: "#ffa000",
            },
          }}
        >
          LEARN MORE
        </Button>
      </CardActions>
    </Card>
  );
}
