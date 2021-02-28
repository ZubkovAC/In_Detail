import React from "react"
import {ClockTime, PropsType} from "./ClockTime";
import {Story} from "@storybook/react";
export default {
    title: '23 / ClockTime',
    component:ClockTime

}



//👇 We create a “template” of how args map to rendering
const Template2: Story<PropsType> = (agrs)  => <ClockTime  mode={"analog"} />;

const Template: Story<PropsType> = (agrs)  => <ClockTime   mode={"digital"}/>;

//👇 Each story then reuses that template
export const ClockDigitalExample = Template.bind({})
ClockDigitalExample.args={
}

export const ClockAnalogExample = Template2.bind({});
ClockAnalogExample.args={
}
/*
export const ClockAnalogExample3 =()=>{
     return <ClockTime  mode={"analog"}/>
}

export const ClockDigitalExample4 =()=>{
     return <ClockTime  mode={"digital"}/>
}*/









