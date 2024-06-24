import { FC } from "react";
import { FilterPanel } from "../components/FilterPanel";
import { DataTable } from "../components/statistic/DataTable/DataTable";

const DashboardPage: FC = () => {
  return (
    <section>
      <h2> Welcome to Ads Perfomanse Dashboard! </h2>
      <div className="dashboard">
        <DataTable />
        <FilterPanel />
      </div>
    </section>
  );
};

export default DashboardPage;
