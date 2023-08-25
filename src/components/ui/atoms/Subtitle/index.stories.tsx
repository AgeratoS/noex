import { Meta, StoryObj } from "@storybook/react";
import Subtitle from ".";

const meta: Meta<typeof Subtitle> = {
    component: Subtitle
}
export default meta;


export const SubtitleBase: StoryObj<typeof Subtitle> = {
    render: () => <Subtitle />
}