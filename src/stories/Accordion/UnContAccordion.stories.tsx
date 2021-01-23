import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { UnContAccordion} from "./UnContAccordion";

export default {
    title: 'Test UnContAccordion',
    component: UnContAccordion,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

export const ModeChange = () =>{
    return <UnContAccordion menu={'Active - Click'} />

}

