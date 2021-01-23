import React from "react";


type ItemType={
    title:string
    value:any
}


export type AccordionTypeProps = {
    /**
     * @~Name menu TypeProps commment's
     */
    menu: string
    value: boolean
    onClick: () => void
    item:any[]
}

export function Accordion(props: AccordionTypeProps) {

    return (
        <div>
            <AccordionTitle title={props.menu} onClick={props.onClick}/>
            {!props.value && <AccordionBody item={props.item} onClick={props.onClick}/>}

        </div>
    )
}

export type AccordionTitleTypeProps = {
    title: string
    onClick: () => void

}

export function AccordionTitle(props: AccordionTitleTypeProps) {
    return (
        <div>
            <h3 onClick={()=>props.onClick()}>{props.title}</h3>
        </div>
    )
}

type AccordionBodyPropsType={
    item:ItemType[]
    onClick:(value:any)=>void
}

function AccordionBody(props:AccordionBodyPropsType) {

    return (
        <div>
            <ul>
                {
                    props.item.map((i,index) =><li onClick={()=>{props.onClick(i.value)}} key={index}>{i.title}</li>)
                }


            </ul>
        </div>
    )
}
