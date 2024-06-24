import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { FC } from "react";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectSources } from "../../redux/selectors";
import { Source } from "../../lib/api";

ChartJS.register(ArcElement, Tooltip, Legend);

export const DonutContainer = styled.div`
  min-width: 336px;
  height: 300px;
  position: relative;
  margin-bottom: 32px;
`;

export const Chart: FC<{ selectedField: string }> = ({ selectedField }) => {
  const { sources } = useSelector(selectSources);

  const data = {
    labels: sources.map((source) => source.name),
    datasets: [
      {
        label: `${selectedField} this month`,
        data: sources.map((source) => source[selectedField as keyof Source]),
        backgroundColor: sources.map((source) => source.color),
        borderColor: sources.map((source) => source.color),
      },
    ],
  };

  const emptyData = {
    labels: ["Empty donut!"],
    datasets: [
      {
        data: [1],
        backgroundColor: ["gray"],
      },
    ],
  };

  return (
    <DonutContainer style={{ marginTop: "30px" }}>
      <>
        <Doughnut
          data={data ? data : emptyData}
          redraw={false}
          options={{ cutout: "70%", plugins: { legend: { display: false } } }}
        />
      </>
    </DonutContainer>
  );
};
