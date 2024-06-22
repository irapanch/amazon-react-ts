import { FC } from "react";
import { DataTable } from "./statistic/DataTable/DataTable";
import styled from "styled-components";
import { Chart } from "./statistic/Chart";

export const DashboardPanel: FC = () => {
  return (
    <Wrap>
      <DataTable />
      <Chart />
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  gap: 20px;
`;
