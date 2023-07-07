import styled from "styled-components";

/**
 * Компонент, содержащий определенный абзац текста
 */
const Paragraph = styled.p`
  color: ${(props) => props.theme.palette.textColor};
  font-family: ${(props) => props.theme.typography.paragraph.fontFamily};
  font-style: ${(props) => props.theme.typography.paragraph.fontStyle};
  font-weight: ${(props) => props.theme.typography.paragraph.fontWeight};

  line-height: 160%;
`;

export default Paragraph;
