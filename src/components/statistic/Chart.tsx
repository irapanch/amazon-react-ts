import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";

ChartJS.register(ArcElement, Tooltip, Legend);

export const DonutContainer = styled.div`
  min-width: 336px;
  height: 300px;
  position: relative;
  margin-bottom: 32px;
`;

export const Chart = () =>
  // { statSummary }
  {
    const emptyData = {
      labels: ["Empty donut!"],
      datasets: [
        {
          data: [1],
          backgroundColor: ["gray"],
        },
      ],
    };

    const boxShadow = {
      width: "208px",
      height: "208px",
      boxShadow: "0px -1px 16px 5px rgba(0,0,0,0.29)",
      borderRadius: "50%",
      position: "absolute",
      top: "46px",
      left: "46px",
      fontSize: "18px",
      paddingTop: "95px",
      textAlign: "center",
    };

    return (
      <DonutContainer>
        <>
          <Doughnut
            data={emptyData}
            redraw={false}
            options={{ cutout: "70%", plugins: { legend: { display: false } } }}
          />
          <span></span>
          {/* <span style={boxShadow}>
          {currentCurrency === "EUR" && <p>€ {euro}</p>}
          {currentCurrency === "USD" && <p>$ {usd}</p>}
          {currentCurrency === "UAH" && <p>₴ {balance}</p>}
        </span> */}
        </>
      </DonutContainer>
    );
  };
