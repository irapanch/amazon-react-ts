import styled from "styled-components";

export const StyledTable = styled.table`
  margin: 0;
  border-collapse: collapse;
  border: 2px solid gray;
  max-width: 600px;
  width: 100%;

  > tbody > tr > td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
    font-size: 30px;
  }

  > thead > tr > th {
    font-size: 20px;
    border: 1px solid #161616;
    border-collapse: collapse;
  }
  p {
    font-size: 14px;
  }
`;
