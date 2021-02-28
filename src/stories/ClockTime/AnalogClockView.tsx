import React from "react";
import css from "./ClockTime.module.css";

export type ClockViewPropsType = {
    date: Date
}

export const AnalogClockView: React.FC<ClockViewPropsType> = ({date}) => {
    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    };
    return <div className={css.clock}>
        <div className={css['analog-clock']}>
            <div className={`${css.dial} ${css.seconds}`} style={secondsStyle} />
            <div className={`${css.dial} ${css.minutes}`} style={minutesStyle} />
            <div className={`${css.dial} ${css.hours}`} style={hoursStyle} />
        </div>
    </div>
}