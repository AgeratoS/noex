import { StoryFn } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import useTheme from "../core/hooks/useTheme";
import { GlobalStyle } from "../core/theming";

const storybookDecorator = (Story: StoryFn) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  );
};

export default storybookDecorator;
