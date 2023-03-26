import { useState } from "react";
import { LabelSelect, SelectStyled } from "./styles";

export const Select = () => {
  const [hasValue, setHasValue] = useState(false);

  const handleChange = (event) => {
    const { value } = event.target;
    setHasValue(value !== "");
  };

  return (
    <>
      <div>
        <LabelSelect htmlFor="plan">Selecione o plano</LabelSelect>
        <SelectStyled name="plan" id="plan" className={hasValue ? "has-value" : ""} onChange={handleChange}>
          <option value="" disabled selected>
            Selecione o plano
          </option>
          <option value="planBasicMonthly">Plano Básico Mensal</option>
          <option value="planBasicSemester">Plano Básico Semestral</option>
          <option value="planBasicYearly">Plano Básico Anual</option>
          <option value="planTopMonthly">Plano Top Mensal</option>
          <option value="planTopSemester">Plano Top Semestral</option>
          <option value="planTopYearly">Plano Top Anual</option>
          <option value="milkPlanMonthly">Plano Leite Mensal</option>
          <option value="milkPlanSemester">Plano Leite Semestral</option>
          <option value="milkPlanYearly">Plano Leite Anual</option>
        </SelectStyled>
      </div>
    </>
  );
};
