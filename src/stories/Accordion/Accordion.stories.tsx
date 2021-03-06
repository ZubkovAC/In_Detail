import React, {useState} from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionTypeProps} from "./Accordion";


export default {
    title: 'Test Accordion + Bonus - 14',    //   'newMenu/Test Accordion + Bonus'  - submenu(newMenu)
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

let item =[{title:'Hello',value:1},{title:'Hey Hey',value:2},{title:'Xaydi',value:3},{title:'Salut',value:4}]

export const AccordionOn = () => <Accordion   menu={'Hello'} value={false} onClick={callback} item={item}/>
export const AccordionOff = () => <Accordion menu={'Users - LOL'} value={true} onClick={callback} item={item}/>
/*export const ClickSwitchOn = () => <Accordion value={true} onClick={callback}/>
export const ClickSwitchOff = () => <Accordion value={false} onClick={callback}/>*/

export const ModeChange = () =>{
    const [value,setvalue]=useState<boolean>(true)
    return <Accordion menu={'Active - Click'} value={value} onClick={()=>setvalue(!value)} item={item}/>

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





