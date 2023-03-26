import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: #6495ed;
  border: none;
  border-radius: 0.8rem;
  color: #fff;
  font-weight: bold;
  width: 10rem;
  height: 4rem;
  cursor: pointer;
  transition: all 0.5s ease;
  margin-top: 2rem;
  margin-left: 50rem;

  :hover {
    background-color: #4169e1;
  }

  @media screen and (max-width: 425px) {
    margin-left: 8.5rem;
  }
`;
