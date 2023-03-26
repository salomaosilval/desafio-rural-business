import { useState } from "react";
import { InputContainer, Error } from "./styles";

export const Input = ({ id, label, type, placeholder }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;

    setValue(inputValue);

    if (!inputValue) {
      setError(`O campo ${label.toLowerCase()} é obrigatório`);
    } else {
      setError("");
    }
  };

  return (
    <>
      <InputContainer>
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} name={id} placeholder={placeholder} value={value} onChange={handleChange} />
        {error && <Error>{error}</Error>}
      </InputContainer>
    </>
  );
};
