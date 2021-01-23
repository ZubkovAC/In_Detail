import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {UnContSwitch} from "./UnContSwitch";

export default {
    title: 'Test UnContSwitch',
    component: UnContSwitch,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

export const TestSwitch = () =>{
    return <UnContSwitch onClick={true}/>
}

