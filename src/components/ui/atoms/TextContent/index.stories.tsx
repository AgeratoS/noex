import { Meta, StoryObj } from "@storybook/react";
import TextContent from ".";

const meta: Meta<typeof TextContent> = {
  component: TextContent,
};

export default meta;

export const PhoneNumber: StoryObj<typeof TextContent> = {
  render: () => <TextContent>+7 (495) 755-02-29</TextContent>,
};
