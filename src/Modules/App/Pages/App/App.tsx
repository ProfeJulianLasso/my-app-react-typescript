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
import GraphQLMutationPage from "../GraphQLMutation";
import GraphQLQueryLazyPage from "../GraphQLQueryLazy";
import NotFound404Page from "../NotFound404";
import ProductsPage from "../Products";

function App(): ReactElement {
  return (
    <>
      <Routes>
        <Route element={<CleanLayout />}>
          <Route path="/" element={<LoginPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="reset" element={<ResetPage />} />
          <Route path="logout" element={<LogoutPage />} />
          <Route path="recovery" element={<RecoveryPage />} />
        </Route>
        <Route element={<ProtectedAuth0Guard component={MainLayout} />}>
          <Route path="products" element={<ProductsPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="graphql-mutation" element={<GraphQLMutationPage />} />
          <Route path="graphql-query-lazy" element={<GraphQLQueryLazyPage />} />
        </Route>
        <Route path="*" element={<NotFound404Page />} />
      </Routes>
    </>
  );
}

export default App;
