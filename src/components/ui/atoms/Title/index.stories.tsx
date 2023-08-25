import { Meta, StoryObj } from "@storybook/react";
import Title from ".";

const meta: Meta<typeof Title> = {
    component: Title
}
export default meta;


export const TitleBase: StoryObj<typeof Title> = {
    render: () => <Title level={1}>Какой-то заголовок</Title>
}

export const TitleLevel2: StoryObj<typeof Title> = {
    render: () => <Title level={2}>Какой-то заголовок</Title>
}