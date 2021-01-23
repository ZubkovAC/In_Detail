import React, {useRef, useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

type UncontrolledInputPropsType = {
    input:string
}

export const UnInput = (props:UncontrolledInputPropsType) =>{
    return (
        <div>
            <input value={props.input}/>
        </div>
    )
}


export default {
    title: 'Detail_12/Input',    //   'newMenu/Test Accordion + Bonus'  - submenu(newMenu)
    component: UnInput,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template:Story<UncontrolledInputPropsType> = (args) => <UnInput {...args} />;
const Template2:Story<UncontrolledInputPropsType> = (args) => {
    const [value,setValue]=useState()

    return <><input onChange={(e)=>{setValue(e.currentTarget.value)}}/> - {value}</>;
}
const Template3:Story<UncontrolledInputPropsType> = (args) => {
    const [value,setValue]=useState()
    const inputRef = useRef<HTMLInputElement>(null)
    const save = ()=>{
        const  el = inputRef.current as HTMLInputElement
        setValue(el.value)}

    return <><input ref={inputRef} id={'inputId'}/> <button onClick={save}>save</button> actual value - {value}</>;
}


export const ButtonInput = Template3.bind({});
export const controlledInput = Template.bind({});
export const UncontrolledInput = Template2.bind({
});
controlledInput.args={
    input:'control-Input'
}




