import React, {ChangeEvent, useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';


import {SelectTest} from "./Select";

type ItemType = {
    title: string
    value: any
}

export type RatingTypeProps = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export default {
    title: 'Detail-15/Test Select',
    component: SelectTest,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta;

let item = [
    {title: 'hello', value: 1},
    {title: 'ai', value: 2},
    {title: 'New brain', value: 3},
    {title: 'let*s go!', value: 4}
]


export const SelectedChange = () => {
    const [rating, setrating] = useState<string | undefined>('1')
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setrating(e.currentTarget.value)
    }
    return (
        <div>
            <SelectTest value={rating} onChange={onChange} items={item}/>
        </div>

    )
}

