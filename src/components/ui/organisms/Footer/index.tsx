import styled from "styled-components";
import Container from "../../atoms/Container";
import { ContainerMode } from "../../atoms/Container/type";
import Copyright from "../../molecules/Copyright";
import Logo, { LogoText } from "../../atoms/Logo";
import TextContent from "../../atoms/TextContent";
import Phone from "../../molecules/Phone";
import FooterNav from "../../molecules/FooterNav";

const FooterWrapper = styled.footer`
  padding: 3.75rem 0 2rem 0;
`;

const FooterInfo = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;

  border-top: 1px solid ${(props) => props.theme.palette.common.white["400_20"]};
  border-bottom: 1px solid
    ${(props) => props.theme.palette.common.white["400_20"]};

  padding: 3.75rem 0;
  margin-bottom: 1.87rem;
`;

const FooterLogo = styled(Logo)`
  max-width: 7.81rem;
  ${LogoText} {
    font-size: 1.5rem;
  }
`;

const FooterLogoContent = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 13.2rem;

  ${TextContent} {
    line-height: 140%;
    margin-bottom: 1.25rem;
  }

  ${FooterLogo} {
    margin-bottom: 0.63rem;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container mode={ContainerMode.CONTAINER}>
        <FooterInfo>
          <FooterLogoContent>
            <FooterLogo />
            <TextContent>Инженерные изыскания в строительстве</TextContent>
            <Phone />
          </FooterLogoContent>

          <FooterNav />

          <div />
        </FooterInfo>
        <Copyright />
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
