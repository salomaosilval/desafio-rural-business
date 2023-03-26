import { Header } from "../../components/Header";

import { SuccessContainer, CheckIcon, Title, Message } from "./styles";

export const Success = () => {
  return (
    <>
      <Header imageSource="https://www.rbvideo.com.br/img/logo.png" />
      <SuccessContainer>
        <CheckIcon />
        <Title>Compra realizada com sucesso!</Title>
        <Message>Obrigado por comprar conosco!</Message>
      </SuccessContainer>
    </>
  );
};
