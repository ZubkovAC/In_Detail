import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import { Button, ButtonProps } from './Button';
import {Accordion, AccordionTypeProps} from "./Accordion";


export default {
    title: 'Test Accordion + Bonus',    //   'newMenu/Test Accordion + Bonus'  - submenu(newMenu)
    component: Accordion,
    argTypes: {
        backgroundColor: { control: 'color' },
        color:{control:'color'}
    },
} as Meta;


const callback = action('accordion mode change event fired')
// story-book -6

const Template:Story<AccordionTypeProps> = (args) => <Accordion {...args} />;

export const MenuCollapsedTRUE = Template.bind({});


// new
const option = {
    onClick:callback,
    menu:'Hello - storyBook 6'    //no comment's
}
MenuCollapsedTRUE.args = {
    ...option,
    value:true
};


export const MenuCollapsedFALSE = Template.bind({});

//old

MenuCollapsedFALSE.args = {
    menu:'Hello - storyBook 6',    // comment's
    value:false,
    onClick:callback
};

// story-book -5



export const AccordionOn = () => <Accordion   menu={'Hello'} value={false} onClick={callback}/>
export const AccordionOff = () => <Accordion menu={'Users - LOL'} value={true} onClick={callback}/>
/*export const ClickSwitchOn = () => <Accordion value={true} onClick={callback}/>
export const ClickSwitchOff = () => <Accordion value={false} onClick={callback}/>*/

export const ModeChange = () =>{
    const [value,setvalue]=useState<boolean>(true)
    return <Accordion menu={'Active - Click'} value={value} onClick={()=>setvalue(!value)}/>

}


export const ModeChangeStory6:Story<AccordionTypeProps> = (args) =>{
    const [value,setvalue]=useState<boolean>(true)

    return <Accordion {...args}  value={value} onClick={()=>setvalue(!value)}/>

}
ModeChangeStory6.args = {
    menu:'Active - Click'
    // props.data-parameters ++
    //items:[{title:'String',value:1},{title:'number',value:2},{title:'boolean',value:3}]
}





