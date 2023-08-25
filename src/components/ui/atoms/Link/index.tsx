import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

const Link = styled(RouterLink)`
    color: ${({ theme }) => theme.palette.primaryColor};
    font-family: Courier New;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration-line: underline;
    text-transform: uppercase;

    &:visited {
        color: ${({ theme }) => theme.palette.common.green[400]}
    }
`;

export default Link;