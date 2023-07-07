import styled from "styled-components";

const TextContent = styled.span`
  color: ${(props) => props.theme.palette.textColor};
  font-family: ${(props) => props.theme.typography.paragraph.fontFamily};
  font-style: ${(props) => props.theme.typography.paragraph.fontStyle};
  font-weight: ${(props) => props.theme.typography.paragraph.fontWeight};
`;

export default TextContent;
