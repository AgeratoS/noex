import styled from "styled-components";
import Container from "../../atoms/Container";
import { ContainerMode } from "../../atoms/Container/type";
import Logo from "../../atoms/Logo";
import HeaderNav from "../../molecules/HeaderNav";
import Phone from "../../molecules/Phone";

const HeaderWrapper = styled.header`
  padding: 1.62rem 0;
`;

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Container mode={ContainerMode.CONTAINER}>
        <HeaderInner>
          <Logo />
          <HeaderNav />
          <Phone />
        </HeaderInner>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
