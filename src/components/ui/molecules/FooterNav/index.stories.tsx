import { Meta, StoryObj } from "@storybook/react";
import FooterNav from ".";

const meta: Meta<typeof FooterNav> = {
  component: FooterNav,
};
export default meta;
export const FooterNavBase: StoryObj<typeof FooterNav> = {
  render: () => <FooterNav />,
};
