import { formatCurrency } from "../../utils/formatCurrency";

import { TableStyled } from "./styles";

export const Table = () => {
  return (
    <>
      <TableStyled>
        <thead>
          <tr>
            <th></th>
            <th>Mensal</th>
            <th>Semestral</th>
            <th>Anual</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Plano Básico</td>
            <td>{formatCurrency(9.9)}</td>
            <td>{formatCurrency(59.9)}</td>
            <td>{formatCurrency(118.4)}</td>
          </tr>
          <tr>
            <td>Plano Top</td>
            <td>{formatCurrency(19.9)}</td>
            <td>{formatCurrency(119.9)}</td>
            <td>{formatCurrency(238.8)}</td>
          </tr>
          <tr>
            <td>Plano Leite</td>
            <td>{formatCurrency(29.9)}</td>
            <td>{formatCurrency(179.4)}</td>
            <td>{formatCurrency(358.8)}</td>
          </tr>
          <tr>
            <td></td>
            <td>Cartão</td>
            <td>Boleto/Cartão</td>
            <td>Boleto/Cartão</td>
          </tr>
        </tbody>
      </TableStyled>
    </>
  );
};
