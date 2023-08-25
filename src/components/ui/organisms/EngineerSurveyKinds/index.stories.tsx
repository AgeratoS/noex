import { Meta, StoryObj } from "@storybook/react";
import EngineerSurveyKinds from ".";

const meta: Meta<typeof EngineerSurveyKinds> = {
    component: EngineerSurveyKinds
}
export default meta;


export const EngineerSurveyKindsBase: StoryObj<typeof EngineerSurveyKinds> = {
    render: () => <EngineerSurveyKinds />
}