import { PropsWithChildren } from "react";
import styled from "styled-components";
import { StyledTitleProps, TitleProps } from "./type";
import _ from "lodash";

const getSizeCondition: (level: number) => string = (level) => {
  if (level === 1) {
    return "3rem";
  }
  if (level === 2) {
    return "2.25rem";
  }

  return "1rem";
};

const StyledTitle = styled.h1.attrs<StyledTitleProps>((props) => ({
  $level: props.$level ?? 1
}))`
  font-size: ${({ $level }) => getSizeCondition($level!)};

  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  text-transform: uppercase;
`;

const Title = (props: PropsWithChildren<TitleProps>) => {
  return <StyledTitle $level={props.level} as={`h${props.level}`} {...props}>{props.children}</StyledTitle>;
};

export default Title;