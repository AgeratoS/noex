import styled, { useTheme } from "styled-components";
import logo from "../../../../../public/images/logo.svg";
import { Link } from "react-router-dom";

const LogoText = styled.span`
  color: ${({ theme }) => theme.palette.logoColor};
  font-family: Montserrat;
  font-size: 2.36513rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  text-transform: uppercase;
`;

const LogoWrapper = styled(Link)`
  display: inline-flex;
  gap: 1rem;
  align-items: center;
`;

const Logo = () => {
  const theme = useTheme();

  return (
    <LogoWrapper to="/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="39"
        height="78"
        viewBox="0 0 39 78"
        fill="none"
      >
        <g clip-path="url(#clip0_4976_2436)">
          <path
            d="M38.7944 72.663L4.3992 38.3326V26.0208L38.7944 60.3512V21.8737H35.3471V34.8335L0.951904 0.477173V5.31116L35.3471 39.6675V52.0699L0.951904 17.7396V56.2041H4.3992V43.2443L38.7944 77.5229V72.663Z"
            fill={theme.palette.logoColor}
          />
        </g>
        <defs>
          <clipPath id="clip0_4976_2436">
            <rect
              width="37.8425"
              height="77.0457"
              fill="white"
              transform="translate(0.951904 0.477173)"
            />
          </clipPath>
        </defs>
      </svg>
      <LogoText>Ноэкс</LogoText>
    </LogoWrapper>
  );
};

export default Logo;
