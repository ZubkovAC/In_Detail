import React, {useEffect, useState} from "react"
import {Meta} from "@storybook/react/types-6-0";

export default {
    title: '21/ Use Effect TimeOut',
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta


export const TimeOutExample = () => {
    let a = new Date()
    /*const [counter, setcounter] = useState(1)
    const [fake, setFake] = useState(1)
    const [getHours, setgetHours] = useState(a.getHours())
    const [getMinutes, setgetMinutes] = useState(a.getMinutes())
    const [getSeconds, setgetSeconds] = useState(a.getSeconds())*/

        console.log("-SempleExample-")

    /*useEffect( () =>{
        setInterval(()=> {
            console.log(getHours)
            setgetHours(state => state ===59? state=0 : state+1)
        },360000)
    },[])
    useEffect( () =>{
        setInterval(()=> {
            console.log(getMinutes)
            setgetMinutes(state => state ===59? state=0 : state+1)
        },60000)
    },[])
    useEffect( () =>{
        setInterval(()=> {
            console.log(getMinutes)
            setgetSeconds(state => state ===59? state=0 : state+1)
        },1000)
    },[])*/

    const [getHours, setgetHours] = useState(a.getHours())
    const [getMinutes, setgetMinutes] = useState(a.getMinutes())
    const [getSeconds, setgetSeconds] = useState(a.getSeconds())



    useEffect( () =>{
        setInterval(()=> {
            a = new Date()
            setgetHours(a.getHours())
            setgetMinutes(a.getMinutes())
            setgetSeconds(a.getSeconds())
                },1000)
        },[])


    /*useEffect(() => {
        setInterval(()=>{
            setcounter(stat=>stat+1)
        },1000)
    },[])*/
    /*useEffect(() => {
        setInterval(()=>{
            setFake((state)=>state+1)
        },250000)
    },[fake])*/


    return <>

        Watch - {getHours} - {getMinutes} - {getSeconds}
{/*
        <button onClick={() => setFake(fake + 1)}>fake+</button>
         {fake} fake -- counter {counter}
        <button onClick={() => setcounter(counter + 1)}>counter+</button>*/}

    </>
}