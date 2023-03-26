import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { Input } from "../Input";
import { Select } from "../Select";
import { Table } from "../Table";

import { FormContainer, RegisterContainer, LabelRadio, TextPayment } from "./styles";

export const Form = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleButtonClick = () => {
    navigate("/success");
  };

  const renderPaymentForm = () => {
    if (paymentMethod === "boleto") {
      return (
        <>
          <Select />
          <Input
            id="boleto"
            label="Digite o seu melhor email para receber o boleto"
            type="email"
            placeholder="email@email.com"
          />
          <Button content="Comprar" onClick={handleButtonClick} />
        </>
      );
    } else if (paymentMethod === "cartao") {
      return (
        <>
          <Select />
          <Input id="cardNumber" label="Número do cartão" type="text" placeholder="0000 0000 0000 0000" />
          <Input id="cardExpiration" label="Validade" type="text" placeholder="MM/AA" />
          <Input id="cardCVV" label="CVV" type="text" placeholder="000" />
          <Button content="Comprar" onClick={handleButtonClick} />
        </>
      );
    }
  };

  return (
    <>
      <FormContainer>
        <RegisterContainer>
          <h1>Dados cadastrais</h1>
          <Input id="name" label="Nome" type="text" placeholder="Digite seu nome completo" />
          <Input id="cpf" label="CPF" type="text" placeholder="000.000.000-00" />
          <Input id="email" label="Email" type="email" placeholder="email@email.com" />
          <Input id="telefone" label="Telefone" type="text" placeholder="(00) 0 0000-0000" />
          <Table />
        </RegisterContainer>
        <RegisterContainer>
          <h1>Endereço</h1>
          <Input id="cep" label="CEP" type="text" placeholder="00000-000" />
          <Input id="street" label="Rua" type="text" placeholder="Digite sua rua" />
          <Input id="number" label="Número" type="text" placeholder="Digite o número" />
          <Input id="complement" label="Complemento" type="text" placeholder="Digite um complemento" />
          <Input id="neighborhood" label="Bairro" type="text" placeholder="Digite o bairro" />
          <Input id="city" label="Cidade" type="text" placeholder="Digite a cidade" />
          <Input id="state" label="Estado" type="text" placeholder="Digite o estado" />
        </RegisterContainer>
        <RegisterContainer isPayment>
          <h1>Pagamento</h1>
          <TextPayment>Selecione o método de pagamento</TextPayment>
          <LabelRadio>
            <input type="radio" name="paymentMethod" value="boleto" onChange={handlePaymentMethodChange} />
            Boleto
          </LabelRadio>
          <LabelRadio>
            <input type="radio" name="paymentMethod" value="cartao" onChange={handlePaymentMethodChange} />
            Cartão de crédito
          </LabelRadio>
          {renderPaymentForm()}
        </RegisterContainer>
      </FormContainer>
    </>
  );
};
