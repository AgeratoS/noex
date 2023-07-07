import { Meta, StoryObj } from "@storybook/react";
import Phone from ".";

const meta: Meta<typeof Phone> = {
  component: Phone,
};

export default meta;

export const PhoneBase: StoryObj<typeof Phone> = {
  render: () => <Phone />,
};
