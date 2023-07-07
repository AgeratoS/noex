import { Meta, StoryObj } from "@storybook/react";
import Header from ".";

const meta: Meta<typeof Header> = {
  component: Header,
};
export default meta;
export const HeaderBase: StoryObj<typeof Header> = {
  render: () => <Header />,
};
