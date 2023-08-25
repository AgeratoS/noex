import { Meta, StoryObj } from "@storybook/react";
import EngineerSurveyPurpose from ".";

const meta: Meta<typeof EngineerSurveyPurpose> = {
    component: EngineerSurveyPurpose
}

export default meta;
export const EngineerSurveyPurposeComponent: StoryObj<typeof EngineerSurveyPurpose> = {
    render: () => <EngineerSurveyPurpose />
}