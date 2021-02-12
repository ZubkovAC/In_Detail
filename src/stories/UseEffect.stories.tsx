import React, {useEffect, useState} from "react"
import {Meta} from "@storybook/react/types-6-0";

export default {
    title: '20/ Use Effect',
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta


export const SempleExample = () => {
    const [counter, setcounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log("-SempleExample-")

    useEffect(() => {
        console.log('useEffect every render ')
        document.title = counter.toString()
        //apo.getUsers().then("")   -- запрос на сервер
        //setInterval               -- задать интервал
        //indexedDB                 -- работа с базой даных
        //document.getElementId     -- обращение к базе данных
        //document.title = 'User'   -- изменение title


    })

    useEffect(() => {

        console.log('useEffect onle every render ( analog-componentDidMount)')
        document.title = counter.toString()
    },[])

    useEffect(() => {

        console.log('useEffect first render and every counter change  ')
        document.title = counter.toString()
    },[counter])


    return <>

        <button onClick={() => setFake(fake + 1)}>fake+</button>
         {fake} fake -- counter {counter}
        <button onClick={() => setcounter(counter + 1)}>counter+</button>

    </>
}