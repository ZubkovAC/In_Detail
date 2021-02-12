import React, {useMemo, useState} from "react"
import {Meta} from "@storybook/react/types-6-0";

export default {
    title: '19/ Use State +',
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta


function generateFata() {
    /// difficult counting
    console.log('generateFata')
    return 329234
}


export const Example1 = () => {
    console.log("-Example-")

    //const initValue = useMemo(generateFata,[])

    const [counter, setcounter] = useState(generateFata) // [1,funtion(newvalue){}]

    //const changer = (state:number)=> state +1


    return <>
        <button onClick={() => {
            setcounter(state => state + 1)
        }}>+
        </button>
        {counter}
    </>
}