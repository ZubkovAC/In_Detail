import React, {useEffect, useState} from "react"
import {Meta} from "@storybook/react/types-6-0";

export default {
    title: '24/ Use Effect-ResetExample',
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta


export const ResetExample = () => {
    const [counter, setcounter] = useState(1)

    console.log('effect rendered')

    useEffect(() => {
        console.log('effect occurred')

        return ()=>{
            console.log('RESET EFFECT')
        }
    },[])


    return <>

        Hello -- counter {counter}
        <button onClick={()=>{setcounter(counter+1)}}>+</button>
    </>
}



export const KeysTrakerExample = () => {
    const [text, setText] = useState('')

    console.log('effect rendered'+text)

    useEffect(() => {
        const Hangler = (e:KeyboardEvent)=> {console.log(e.key)
        setText( text + e.key)}
       window.document.addEventListener('keypress', Hangler)
        return () => {
            window.document.removeEventListener('keypress',Hangler)
        }
    },[text])


    return <>

        Type Text :  {text}
    </>
}

export const SetTimeOutExample = () => {
    const [text, setText] = useState('')

    console.log('effect rendered'+text)

    useEffect(() => {
        const SetInterval = setTimeout(()=>{
            setText('3 sec')
        },3000)

        return () => {
           clearTimeout(SetInterval)
        }
    },[text])


    return <>

        Type SetTimeOut :  {text}
    </>
}