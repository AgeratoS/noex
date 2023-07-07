import styled, { useTheme } from "styled-components";
import logo from "../../../../../public/images/logo.svg";

const LogoText = styled.span`
  color: ${({ theme }) => theme.palette.logoColor};
  font-family: Montserrat;
  font-size: 2.36513rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  text-transform: uppercase;
`;

const LogoWrapper = styled.span`
  display: inline-flex;
  gap: 1rem;
  align-items: center;
`;

const Logo = () => {
  return (
    <LogoWrapper as="a" href="/">
      <img src={logo} />
      <LogoText>Ноэкс</LogoText>
    </LogoWrapper>
  );
};

export default Logo;
