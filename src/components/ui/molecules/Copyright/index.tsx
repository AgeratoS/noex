import { styled } from "styled-components";
import TextContent from "../../atoms/TextContent";

const CopyrightText = styled(TextContent)`
  text-align: center;
  display: block;
`;

const Copyright = () => {
  return (
    <CopyrightText>
      НОЭКС. Все права защищены 2021©. Инженерные изыскания с 1999 года.
    </CopyrightText>
  );
};

export default Copyright;
