import { Meta, StoryObj } from "@storybook/react";
import Copyright from ".";

const meta: Meta<typeof Copyright> = {
  component: Copyright,
};
export default meta;
export const CopyrightBase: StoryObj<typeof Copyright> = {
  render: () => <Copyright />,
};
