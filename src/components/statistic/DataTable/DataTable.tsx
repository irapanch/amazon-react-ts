import { FC, useEffect } from "react";
import { StyledTable } from "./DataTable.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectSources } from "../../../redux/selectors";
import { fetchSourceThunk } from "../../../redux/operations";
import { AppDispatch } from "../../../redux/store";
import { Source } from "../../../lib/api";

export const DataTable: FC = () => {
  const { sources } = useSelector(selectSources);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchSourceThunk());
  }, [dispatch]);
  return (
    <StyledTable>
      <thead>
        <tr>
          {sources?.map((source: Source) => (
            <th key={source.id} style={{ backgroundColor: source.color }}>
              {source.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {sources?.map((source: Source) => (
            <td key={source.id}>
              ${source.spend} <p>spend this month</p>
            </td>
          ))}
        </tr>
        <tr>
          {sources?.map((source: Source) => (
            <td key={source.id}>
              {source.conversion}
              <p>Conversions</p>
            </td>
          ))}
        </tr>
        <tr>
          {sources?.map((source: Source) => (
            <td key={source.id}>
              {" "}
              ${(source.spend / source.conversion).toFixed(2)}{" "}
              <p>Cost per conversion</p>
            </td>
          ))}
        </tr>
        <tr>
          {sources?.map((source: Source) => (
            <td key={source.id}>
              {source.session}
              <p>Session</p>
            </td>
          ))}
        </tr>
        <tr>
          {sources?.map((source: Source) => (
            <td key={source.id}>
              ${(source.spend / source.session).toFixed(2)}{" "}
              <p>Cost per click</p>
            </td>
          ))}
        </tr>
      </tbody>
    </StyledTable>
  );
};
