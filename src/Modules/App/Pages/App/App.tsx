import { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedAuth0Guard from "../../../../Guards/ProtectedAuth0Guard";
import CleanLayout from "../../../../Layouts/Clean";
import MainLayout from "../../../../Layouts/Main";
import LoginPage from "../../../Security/Pages/Login";
import LogoutPage from "../../../Security/Pages/Logout";
import RecoveryPage from "../../../Security/Pages/Recovery";
import ResetPage from "../../../Security/Pages/Reset";
import DashboardPage from "../Dashboard";
import NotFound404Page from "../NotFound404";

function App(): ReactElement {
  return (
    <>
      <Routes>
        <Route element={<CleanLayout />}>
          <Route path="/" element={<LoginPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="logout" element={<LogoutPage />} />
        </Route>
        <Route element={<ProtectedAuth0Guard component={MainLayout} />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="recovery" element={<RecoveryPage />} />
          <Route path="reset" element={<ResetPage />} />
        </Route>
        <Route path="*" element={<NotFound404Page />} />
      </Routes>
    </>
  );
}

export default App;
