import { Meta, StoryObj } from "@storybook/react";
import Logo from ".";

const meta: Meta<typeof Logo> = {
  component: Logo,
};

export default meta;

export const BaseLogo: StoryObj<typeof Logo> = {
  render: () => <Logo />,
};
