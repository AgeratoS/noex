import styled from "styled-components";
import { ContainerMode, ContainerProps } from "./type";

const Container = styled.div<ContainerProps>`
  max-width: ${(props) =>
    props.mode === ContainerMode.CONTAINER ? "75rem" : "100%"};
  padding: ${(props) =>
    props.mode === ContainerMode.CONTAINER ? "10px" : "0"};
  margin: 0 auto;
`;

export default Container;
