import React, {useState, KeyboardEvent, useEffect} from "react";
import css from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

export type RatingTypeProps = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const SelectTest2= React.memo(SelectTest2Secret)

export function SelectTest2Secret(props: RatingTypeProps) {

    const [active,setActive]=useState(false)
    const [hovered,setHovered]=useState(props.value)

    const selectItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hovered)

    useEffect(()=>{
        setHovered(props.value)
    },[props.value])

    const toggleItems = () => setActive(!active)
    const onItemClick = (value:any)=>{
        props.onChange(value)
        toggleItems()
    }

    const onKeyUp = (e:KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hovered) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]

                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return
                    }
                }
            }
            if (!selectItem){
            props.onChange(props.items[0].value)
        }}
        if (e.key === "Enter" || e.key === "Escape"){
            setActive(false)
        }
    }

    return (
        <div className={css.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={css.main} onClick={toggleItems} >
                    {selectItem && selectItem.title}</span>
                {
                    active &&
                    <div className={css.items}>
                        {props.items.map((i) =>
                            <div
                                key={i.value}
                                 onMouseEnter={()=>{setHovered(i.value)}}
                                 className={css.item + ''+ (hoveredItem === i ? css.selected : '')}
                                onClick={()=>{onItemClick(i.value)
                                }}>
                                {i.title}
                            </div>)}
                    </div>
                }

        </div>
    )
}

//  up -1 string <h3> and +2 string - two metod (collapsed). 1 - css , 2 - div

