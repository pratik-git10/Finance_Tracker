import { Suspense } from "react";
import DashboardPage from "./page";
import { BarLoader } from "react-spinners";

const DashboardLayout = ({ children }) => {
  return (
    <div className="px-5">
      {children}
      <h1 className="text-6xl font-bold gradient-title mb-5">Dashboard</h1>

      {/* DashboardPage */}
      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}
      >
        <DashboardPage />
      </Suspense>
    </div>
  );
};

export default DashboardLayout;
