import { ButtonStyled } from "./styles";

export const Button = ({ content, onClick }) => {
  return (
    <>
      <ButtonStyled onClick={onClick}>{content}</ButtonStyled>
    </>
  );
};
