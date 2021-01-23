import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import {Switch, SwitchPropsType} from "./Switch";

export default {
    title: 'Test Switch',
    component: Switch,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const callback = action('on or off cliked')

export const EmptySwitchOn = () => <Switch value={true} onClick={a=>a}/>
export const EmptySwitchOff = () => <Switch value={false} onClick={a=>a}/>
export const ClickSwitchOn = () => <Switch value={true} onClick={callback}/>
export const ClickSwitchOff = () => <Switch value={false} onClick={callback}/>

export const ModeChange = () =>{
    const [value,setvalue]=useState<boolean>(true)
    return <Switch value={value} onClick={setvalue}/>

}

