import { Meta, StoryObj } from "@storybook/react";
import Footer from ".";
import EngineerSurveyDescription from ".";

const meta: Meta<typeof EngineerSurveyDescription> = {
    component: Footer,
};
export default meta;
export const EngineerSurveyDescriptionBase: StoryObj<typeof Footer> = {
    render: () => <EngineerSurveyDescription />,
};
