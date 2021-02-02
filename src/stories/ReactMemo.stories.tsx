import React, {useState} from "react"
import {Meta} from "@storybook/react/types-6-0";

export default {
    title:'16/React.memo demo',
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}as Meta


const NewMessageCounterSecret = (props:{counter:number})=>{
    console.log('1-NewMessageCounter')
    return <div>{props.counter}</div>
}
const NewMessageCounter = React.memo(NewMessageCounterSecret)

type UserType = {       // analog -16-string
    users:Array<string>
}

const UsersSecret = (props:{users:Array<string>})=>{
    console.log('2-UsersSecret')
    return <div>{
        props.users.map((u,i)=> <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)


export const Example1 = () => {
    console.log("3-Example1")

    const [counter,setcounter]=useState(0)
    const [users,setusers]=useState(["Dimych", "Valera","Artem"])

    const addUser = () => {
        let newUser = [...users,'Leluk'+new Date().getDate()]
        setusers(newUser)
    }

    return <>
        <button onClick={()=>{setcounter(counter+1)}}>+</button>
        <button onClick={addUser}>add User</button>
        <NewMessageCounter counter={counter}/>
        <Users users={users}/>
        </>
}