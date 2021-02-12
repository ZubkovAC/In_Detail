import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';


import {Rating} from "./Rating";

export default {
    title: 'Test Select',
    component: Rating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

export const EmptyRating = () => <Rating number={0} onClick={a=>a}/>
export const Rating1 = () => <Rating number={1} onClick={a=>a}/>
export const Rating2 = () => <Rating number={2} onClick={a=>a}/>
export const Rating3 = () => <Rating number={3} onClick={a=>a}/>
export const Rating4 = () => <Rating number={4} onClick={a=>a}/>
export const Rating5 = () => <Rating number={4} onClick={a=>a}/>

export const RatingChange = () =>{
    const [rating,setrating]=useState<0|1|2|3|4|5>(3)
    return <Rating number={rating} onClick={setrating}/>
}

