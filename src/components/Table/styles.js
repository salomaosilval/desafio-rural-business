import styled from "styled-components";

export const TableStyled = styled.table`
  border-collapse: collapse;
  font-size: 1.6rem;
  width: 100%;
  margin-top: 3rem;
  background-color: #fff;

  td,
  th {
    border: 1px solid #ccc;
    padding: 1.2rem;
  }

  @media screen and (max-width: 425px) {
    font-size: 1.4rem;

    td,
    th {
      padding: 0.2rem;
    }
  }
`;
