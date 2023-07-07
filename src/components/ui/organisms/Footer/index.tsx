import styled from "styled-components";
import Container from "../../atoms/Container";
import { ContainerMode } from "../../atoms/Container/type";
import Copyright from "../../molecules/Copyright";

const FooterWrapper = styled.footer`
  padding: 3.75rem 0 2rem 0;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container mode={ContainerMode.CONTAINER}>
        <Copyright />
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
