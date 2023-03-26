import styled from "styled-components";

import { BsFillCheckCircleFill } from "react-icons/bs";

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90vw;
  height: 75vh;
  background-color: #eee;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  margin: 0 auto;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const CheckIcon = styled(BsFillCheckCircleFill)`
  font-size: 7rem;
  color: green;
  margin-bottom: 1rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 425px) {
    font-size: 2rem;
  }
`;

export const Message = styled.p`
  font-size: 2rem;

  @media screen and (max-width: 425px) {
    font-size: 1.5rem;
  }
`;
