import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  label {
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  input {
    height: 4rem;
    border: none;
    border-radius: 0.5rem;
    outline: none;
    padding: 1.5rem;
    font-size: 1.6rem;

    :-webkit-autofill {
      -webkit-box-shadow: 0 0 0 30px #fff inset;
      -webkit-text-fill-color: #000 !important;
    }

    :not(:placeholder-shown) {
      border: 1px solid #ccc;
    }
  }
`;

export const Error = styled.span`
  color: #ff0000;
  font-size: 1.4rem;
  display: block;
  margin-top: 0.4rem;
`;
