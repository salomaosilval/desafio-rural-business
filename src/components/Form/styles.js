import styled from "styled-components";

export const FormContainer = styled.div`
  width: 90vw;
  background-color: #eee;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5rem;
  padding: 2rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
  }
`;

export const RegisterContainer = styled.div`
  margin: 1rem;

  ${(props) =>
    props.isPayment &&
    ` 
    grid-column: span 2;
  `}
`;

export const TextPayment = styled.p`
  font-size: 1.6rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const LabelRadio = styled.label`
  font-size: 1.6rem;
  margin-right: 1rem;

  input[type="radio"] {
    margin-right: 0.5rem;
    width: 1.6rem;
    height: 1.6rem;
    vertical-align: middle;
  }
`;
