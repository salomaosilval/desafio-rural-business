import { HeaderContainer } from "./styles";

export const Header = ({ imageSource }) => {
  return (
    <>
      <HeaderContainer>
        <img src={imageSource} alt="Rural Business logo" />
      </HeaderContainer>
    </>
  );
};
