import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

export type PropsType = {
    mode: 'digital' | 'analog'
}


export const ClockTime = (props: PropsType) => {

    const [date, setDate] = useState(new Date())


    useEffect(() => {
        let time = setInterval(() => {
            setDate(new Date())
            console.log('id id')
        }, 1000)
        return () => {
            console.log('id-iddd')
            clearInterval(time)
        }
    }, [])


    let view

    switch (props.mode) {
        case "analog": {
            view = <AnalogClockView date={date}/>
            break
        }
        default:
            view =  <DigitalClockView date={date}/>
    }


    return <div>
        { view }
    </div>
}



