import { FC } from "react";
import FilterPanel from "../components/FilterPanel/FilterPanel";
import { DashboardPanel } from "../components/DashboardPanel/DashboardPanel";

const DashboardPage: FC = () => {
  return (
    <section>
      <h1> Welcome to Ads Perfomanse Dashboard! </h1>
      <FilterPanel />
      <DashboardPanel />
    </section>
  );
};

export default DashboardPage;
