import React, {ChangeEvent, useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta} from '@storybook/react/types-6-0';


import {SelectTest2} from "./Select-Dumych";
import {action} from "@storybook/addon-actions";

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
    title: 'Detail-15/Test Select - Dumych',
    component: SelectTest2,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta;

let item = [
    {title: 'Minsk', value: '1'},
    {title: 'Moscow', value: '2'},
    {title: 'Voroneg', value: '3'},
    {title: 'Kiev', value: '4'}
]

export const SelectedChange = () => {

    const [value, setvalue] = useState<string | undefined>('3')
    return (
        <div>
            <SelectTest2
                value={value}
                onChange={setvalue}
                items={item}/>
        </div>

    )
}

export const SelectedChange2 = () => {

    const [value, setvalue] = useState<string | undefined>(undefined)
    return (
        <div>
                <SelectTest2
                    value={value}
                    onChange={setvalue}
                    items={item}/>
        </div>
    )
}
