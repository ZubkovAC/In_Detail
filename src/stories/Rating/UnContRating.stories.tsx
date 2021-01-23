import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {UnContRating} from "./UnContRating";

export default {
    title: 'Test UnContRating',
    component: UnContRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

export const ChangeUnContRating = () =>{
    return <UnContRating count={1} />
}

