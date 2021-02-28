import React from "react";
import {ClockViewPropsType} from "./AnalogClockView";



export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    const secondsString = (num: number) => num < 10 ? '0' + num : num
    return <>

        <span>{secondsString(date.getHours())}</span>
        :
        <span>{secondsString(date.getMinutes())}</span>
        :
        <span>{secondsString(date.getSeconds())}</span>
    </>
}