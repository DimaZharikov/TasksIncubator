import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0';
import HW12 from "./HW12";
import ReduxStoreProviderDecoration from "../../decorators/ReduxStoreProviderDecorator";

export default {
    title: 'HomeWork/HW12',
    components: HW12,
    decorators: [ReduxStoreProviderDecoration]

} as Meta



const Template: Story = () => {
    return <HW12 />
}

export const AppExample = Template.bind({})