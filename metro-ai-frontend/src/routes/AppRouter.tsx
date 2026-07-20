import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import LoginPage from "../pages/auth/LoginPage";

export default function AppRouter() {
  return (
   

      <Routes>

        <Route
          path="/"
          element={<LoginPage />}
        />

      </Routes>

  );
}