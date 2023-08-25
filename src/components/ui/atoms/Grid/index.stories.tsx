import { Meta, StoryObj } from "@storybook/react";
import Grid from ".";
import TextContent from "../TextContent";

const meta: Meta<typeof Grid> = {
    component: Grid
}
export default meta;


export const GridBase: StoryObj<typeof Grid> = {
    render: () => <Grid>
        <div>
            <TextContent>Hello everyone!</TextContent>
        </div>
        <div>
            <TextContent>Hello everyone!</TextContent>
        </div>
        <div>
            <TextContent>Hello everyone!</TextContent>
        </div>
    </Grid>
}