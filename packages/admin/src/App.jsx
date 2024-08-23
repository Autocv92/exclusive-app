import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Loader } from "./common/Loader";
import { DefaultLayout } from "./layout/DefaultLayout";
import { PageTitle } from "./components/PageTitle";
import { Dashboard } from "./pages/Dashboard";
import { Profile } from "./pages/Profile";

export function App() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
        <Route
          path="admin"
          element={
            <>
              <PageTitle title="Dashboard" />
              <Dashboard />
            </>
          }
        />
        <Route
          path="/admin/profile"
          element={
            <>
              <PageTitle title="Profile" />
              <Profile />
            </>
          }
        />
      </Routes>
    </DefaultLayout>
  );
}
