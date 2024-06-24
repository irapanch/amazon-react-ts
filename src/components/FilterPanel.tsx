import { FC, useState } from "react";
import { Chart } from "./statistic/Chart";

export const FilterPanel: FC = () => {
  const [selectedField, setSelectedField] = useState("spend");

  const handleFieldChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedField(event.target.value);
  };
  return (
    <div>
      <h3> Chart displays the category: {selectedField}</h3>
      <select value={selectedField} onChange={handleFieldChange}>
        <option value="spend">Spend</option>
        <option value="conversion">Conversions</option>
        <option value="session">Sessions</option>
      </select>

      <Chart selectedField={selectedField} />
    </div>
  );
};
