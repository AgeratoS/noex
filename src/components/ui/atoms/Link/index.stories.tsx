import { Meta, StoryObj } from "@storybook/react";
import Link from ".";

const meta: Meta<typeof Link> = {
    component: Link
}
export default meta;


export const LinkBase: StoryObj<typeof Link> = {
    render: () => <Link to="https://google.com">I'm link to google!</Link>
}