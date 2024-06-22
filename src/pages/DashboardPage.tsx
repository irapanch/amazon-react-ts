import { FC } from "react";
import FilterPanel from "../components/filterPanel/FilterPanel";
import { DashboardPanel } from "../components/DashboardPanel";

const DashboardPage: FC = () => {
  return (
    <section>
      <h2> Welcome to Ads Perfomanse Dashboard! </h2>
      <FilterPanel />
      <DashboardPanel />
    </section>
  );
};

export default DashboardPage;
