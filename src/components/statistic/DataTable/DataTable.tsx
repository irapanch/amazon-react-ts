import { FC, useEffect } from "react";
import { StyledTable } from "./DataTable.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectSources } from "../../../redux/selectors";
import { fetchSourceThunk } from "../../../redux/operations";
import { AppDispatch } from "../../../redux/store";
interface Source {
  name: string;
  id: string;
  createdAt: string;
  spend: number;
  conversion: number;
  session: number;
}
export const DataTable: FC = () => {
  const { sources } = useSelector(selectSources);
  console.log(sources);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchSourceThunk());
    console.log(sources);
  }, [dispatch]);
  return (
    // <ul>
    //   {sources.map((source: Source) => (
    //     <li key={source.id}>{source.name}</li>
    //   ))}
    // </ul>
    <StyledTable>
      <thead>
        <tr>
          {sources?.map((source: Source) => (
            <th key={source.id}>{source.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Данные 4</td>
          <td>Данные 5</td>
          <td>Данные 6</td>
        </tr>
        <tr>
          <td>Данные 7</td>
          <td>Данные 8</td>
          <td>Данные 9</td>
        </tr>
        <tr>
          <td>Данные 10</td>
          <td>Данные 11</td>
          <td>Данные 12</td>
        </tr>
        <tr>
          <td>Данные 13</td>
          <td>Данные 14</td>
          <td>Данные 15</td>
        </tr>
      </tbody>
    </StyledTable>
  );
};
