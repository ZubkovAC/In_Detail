import React, {useMemo, useState} from "react";
import {Meta} from "@storybook/react/types-6-0";

export default {
    title: '17/useMemo ',
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta

export const DifficultCountingExample = () => {

    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 1000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA *= i
        }
        return tempResultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return <>

        <div>
            <input value={a} onChange={(e) => {
                setA(Number(e.currentTarget.value))
            }}/>
            <input value={b} onChange={(e) => {
                setB(+e.currentTarget.value)
            }}/>
        </div>

        <div>
            Result for a: {resultA}
        </div>

        <div>
            Result for b: {resultB}
        </div>
    </>
}


const UsersContainer = (props: { users: Array<string> }) => {
    console.log('-UsersContainer')
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersContainer)

export const HelpsToReactMemo = () => {
    console.log("-HelpsToReactMemo-")

    const [counter, setcounter] = useState(0)
    const [users, setusers] = useState(["Dimych", "Valera", "Artem"])

    const newArray = useMemo(()=>{
        const newArray = users.filter(u => u.toLowerCase().indexOf('e') > -1)
        return newArray
    },[users])

    const addUser = () => {
        let newUser = [...users,'Leluk_'+new Date().getDate()]
        setusers(newUser)
    }

    return <>
        <button onClick={() => {
            setcounter(counter + 1)
        }}>+
        </button>
        <button onClick={() => {addUser()}}>add User
        </button>
        {counter}
        <Users users={newArray}/>
        {/* <hr/>
        <UsersContainer users={users}/>*/}
    </>
}