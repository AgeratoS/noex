import { Meta, StoryObj } from "@storybook/react";
import HeaderNav from ".";

const meta: Meta<typeof HeaderNav> = {
  component: HeaderNav,
};
export default meta;
export const HeaderNavBase: StoryObj<typeof HeaderNav> = {
  render: () => <HeaderNav />,
};
