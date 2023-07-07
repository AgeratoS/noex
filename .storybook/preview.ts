import type { Preview } from "@storybook/react";
import { storybookDecorator } from "../src/utils";

const preview: Preview = {
  decorators: [storybookDecorator],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
