import { ReactElement, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedAuth0Guard from "../../../../Guards/ProtectedAuth0Guard";
import CleanLayout from "../../../../Layouts/Clean";
import MainLayout from "../../../../Layouts/Main";
import LoginPage from "../../../Security/Pages/Login";
import LogoutPage from "../../../Security/Pages/Logout";
import RecoveryPage from "../../../Security/Pages/Recovery";
import ResetPage from "../../../Security/Pages/Reset";
import GraphQLMutationPage from "../GraphQLMutation";
import GraphQLQueryLazyPage from "../GraphQLQueryLazy";
import NotFound404Page from "../NotFound404";

const DashboardPageLazy = lazy(() => import("../Dashboard"));
const ProductsPageLazy = lazy(() => import("../Products"));

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
          <Route
            path="products"
            element={
              <Suspense fallback={<>Loading Products Page...</>}>
                <ProductsPageLazy />
              </Suspense>
            }
          />
          <Route
            path="dashboard"
            element={
              <Suspense fallback={<>Loading Dashboard Page...</>}>
                <DashboardPageLazy />
              </Suspense>
            }
          />
          <Route path="graphql-mutation" element={<GraphQLMutationPage />} />
          <Route path="graphql-query-lazy" element={<GraphQLQueryLazyPage />} />
        </Route>
        <Route path="*" element={<NotFound404Page />} />
      </Routes>
    </>
  );
}

export default App;
