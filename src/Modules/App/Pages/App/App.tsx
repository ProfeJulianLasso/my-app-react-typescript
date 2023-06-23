import { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import CleanLayout from "../../../../Layouts/Clean";
import MainLayout from "../../../../Layouts/Main";
import LoginPage from "../../../Security/Pages/Login";
import RecoveryPage from "../../../Security/Pages/Recovery";
import ResetPage from "../../../Security/Pages/Reset";
import NotFound404Page from "../NotFound404";

function App(): ReactElement {
  return (
    <Routes>
      <Route element={<CleanLayout />}>
        <Route path="/" element={<LoginPage />} />
      </Route>
      <Route element={<MainLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="recovery" element={<RecoveryPage />} />
        <Route path="reset" element={<ResetPage />} />
      </Route>
      <Route path="*" element={<NotFound404Page />} />
    </Routes>
  );
}

export default App;
