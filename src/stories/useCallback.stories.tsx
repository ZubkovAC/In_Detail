import React, {useCallback, useState} from "react";
import {Meta} from "@storybook/react/types-6-0";

export default {
    title: '18/useCallback ',
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta





export const LikeUseCallback = () => {
    console.log("-LikeUseCallback-")

    const [counter, setcounter] = useState(0)
    const [books, setbook] = useState(["React", "JS", "CSS",'HTML'])



/*    const addBook = () => {
        console.log(books)
        let newUser = [...books,'Angular'+new Date().getDate()]
        setbook(newUser)
    }

    const memoizedAddBook = useMemo(()=>{
        return () => {
            console.log(books)
            let newUser = [...books,'Angular'+new Date().getDate()]
            setbook(newUser)
        }
        },[books])*/

    const memoizedAddBook2 = useCallback( () => {
            console.log(books)
            let newUser = [...books,'Angular'+new Date().getDate()]
            setbook(newUser)
        }
        ,[books])

    return <>
        <button onClick={() => {setcounter(counter + 1)}}>+</button>
        {counter}
        <Books  addBook={memoizedAddBook2}/>

    </>
}

type BooksSecterType = {
    addBook:()=>void
}

const BooksSecter = (props:BooksSecterType) => {
    console.log('-BooksSecter')
    return <div>
        <button onClick={() => {props.addBook()}}>addBook</button>

    </div>
}
const Books = React.memo(BooksSecter)
