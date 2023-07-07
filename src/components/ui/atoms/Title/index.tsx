import { PropsWithChildren } from "react";
import styled from "styled-components";
import { TitleProps } from "./type";
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

const StyledTitle = styled.div`
  font-size: ${({ level }) => getSizeCondition(level)};
`;

const Title = (props: PropsWithChildren<TitleProps>) => {
  return <StyledTitle as={`h${props.level}`}>{props.children}</StyledTitle>;
};
