import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import JobDetailModal from "./modals/JobDetailModal";
import ProtectedRoute from "./routes/ProtectedRoute";

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/job/:id"
          element={
            <ProtectedRoute>
              <JobDetailModal />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}
