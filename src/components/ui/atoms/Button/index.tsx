import styled from "styled-components";
import { ButtonProps } from "./type";

const Button = styled.a.attrs<ButtonProps>((props) => ({
    $appearance: props.$appearance ?? 'primary',
    as: (props.$as === 'link' ? 'a' : props.$as) ?? 'button'
}))`

    display: inline-block;
    box-sizing: border-box;
    text-align: center;
    width: 13.14rem;
    padding: 15px 1.88rem;

    font-family: Courier New;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;

    color: ${(props) => props.theme.palette.common.black[700]};

    border: none;
    background-color: ${(props) => props.$appearance === 'primary' ? props.theme.palette.primaryColor : props.theme.palette.common.green[400]};

    &:hover {
        cursor: pointer;
    }
`;

export default Button;