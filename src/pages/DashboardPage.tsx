import { FC } from "react";
import { FilterPanel } from "../components/FilterPanel";
import { DataTable } from "../components/statistic/DataTable/DataTable";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../redux/selectors";

const DashboardPage: FC = () => {
  const isLoading: boolean = useSelector(selectIsLoading);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      <section>
        <h2>Welcome to Ads Performance Dashboard!</h2>
        <div className="dashboard">
          <DataTable />
          <FilterPanel />
        </div>
      </section>
    </>
  );
};

export default DashboardPage;
