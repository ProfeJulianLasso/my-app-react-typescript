import { ReactElement, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedGuard from "../../../../Guards/Protected";
import CleanLayout from "../../../../Layouts/Clean";
import MainLayout from "../../../../Layouts/Main";
import LoginPage from "../../../Security/Pages/Login";
import RecoveryPage from "../../../Security/Pages/Recovery";
import ResetPage from "../../../Security/Pages/Reset";
import NotFound404Page from "../NotFound404";

function App(): ReactElement {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(
    localStorage.getItem("isSignedIn") === "true"
  );

  const signIn = (): void => {
    localStorage.setItem("isSignedIn", "true");
    setIsSignedIn(true);
  };

  const signOut = (): void => {
    localStorage.setItem("isSignedIn", "false");
    setIsSignedIn(false);
  };

  return (
    <>
      <Routes>
        <Route element={<CleanLayout />}>
          <Route path="/" element={<LoginPage />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route
            path="recovery"
            element={
              <ProtectedGuard isSignedIn={isSignedIn}>
                <RecoveryPage />
              </ProtectedGuard>
            }
          />
          <Route
            path="reset"
            element={
              <ProtectedGuard isSignedIn={isSignedIn}>
                <ResetPage />
              </ProtectedGuard>
            }
          />
        </Route>
        <Route path="*" element={<NotFound404Page />} />
      </Routes>
      {isSignedIn ? (
        <div className="d-grid mt-5">
          <button className="btn-danger" onClick={signOut}>
            Sign out
          </button>
        </div>
      ) : (
        <div className="d-grid mt-5">
          <button className="btn-dark" onClick={signIn}>
            Sign in
          </button>
        </div>
      )}
    </>
  );
}

export default App;
