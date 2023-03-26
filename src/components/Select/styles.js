import styled from "styled-components";

export const LabelSelect = styled.label`
  display: block;
  font-size: 1.6rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export const SelectStyled = styled.select`
  font-size: 1.6rem;
  width: 100%;
  border: none;
  height: 4rem;
  padding: 1rem;
  border-radius: 0.5rem;

  &.has-value:valid {
    border: 1px solid #ccc;
  }

  :focus-visible {
    outline: none;
  }
`;
