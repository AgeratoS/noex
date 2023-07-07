import styled from "styled-components";

const SocialButtonWrapper = styled.a`
  width: 32px;
  height: 32px;

  border-radius: 4px;
  background-color: ${({ theme }) => theme.palette.primaryColor};
`;

const SocialButton = (props: unknown) => {
  return <SocialButtonWrapper></SocialButtonWrapper>;
};

export default SocialButton;
