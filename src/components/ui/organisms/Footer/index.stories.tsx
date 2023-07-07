import { Meta, StoryObj } from "@storybook/react";
import Footer from ".";

const meta: Meta<typeof Footer> = {
  component: Footer,
};
export default meta;
export const FooterBase: StoryObj<typeof Footer> = {
  render: () => <Footer />,
};
