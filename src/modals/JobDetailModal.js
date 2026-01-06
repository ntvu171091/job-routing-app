import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Chip,
  Stack,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { JOBS_DATA } from "../data/jobs";

export default function JobDetailModal() {
  const { id } = useParams(); // ✅ LẤY ID TỪ URL
  const navigate = useNavigate();

  const job = JOBS_DATA.find((j) => j.id === id);

  // ❗ nếu không có id → không render dialog
  if (!id || !job) return null;

  return (
    <Dialog
      open={true} // ✅ BẮT BUỘC
      fullWidth
      maxWidth="md"
      onClose={() => navigate(-1)} // quay lại trang trước
    >
      <DialogTitle>{job.title}</DialogTitle>

      <DialogContent dividers>
        <Stack direction="row" spacing={1} mb={2} flexWrap="wrap">
          {job.skills.map((s, i) => (
            <Chip key={i} label={s} color="error" />
          ))}
        </Stack>

        <Typography mb={2}>{job.description}</Typography>

        <Typography fontWeight="bold">
          Salary: {job.salaryLow} – {job.salaryHigh}
        </Typography>

        <Typography>
          City: {job.city} • Remote: {job.remote ? "Yes" : "No"}
        </Typography>
      </DialogContent>

      <DialogActions>
        <Button onClick={() => navigate(-1)}>Close</Button>
        <Button variant="contained">Apply</Button>
      </DialogActions>
    </Dialog>
  );
}
