import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Grid, Container, Pagination, Box } from "@mui/material";

import { JOBS_DATA } from "../data/jobs";
import JobCard from "./JobCard";

const PAGE_SIZE = 6; // 6 job = 2 hàng x 3 cột

export default function JobList() {
  const [params] = useSearchParams();
  const search = params.get("q") || "";
  const [page, setPage] = useState(1);

  const filteredJobs = useMemo(() => {
    if (!search) return JOBS_DATA;
    return JOBS_DATA.filter(
      (j) =>
        j.title.toLowerCase().includes(search.toLowerCase()) ||
        j.skills.some((s) => s.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search]);

  const totalPages = Math.ceil(filteredJobs.length / PAGE_SIZE);

  const jobs = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredJobs.slice(start, start + PAGE_SIZE);
  }, [page, filteredJobs]);

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Grid container spacing={2} mt={2}>
        {jobs.map((job) => (
          <Grid key={job.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <Box mt={6} display="flex" justifyContent="center">
          <Pagination
            count={totalPages}
            page={page}
            onChange={(_, v) => setPage(v)}
            color="error"
            size="large"
            sx={{
              "& .MuiPaginationItem-root": {
                fontWeight: "bold",
              },
            }}
          />
        </Box>
      )}
    </Container>
  );
}
