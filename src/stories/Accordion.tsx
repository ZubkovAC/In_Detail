import React from "react";

export type AccordionTypeProps = {
    /**
     * @~Name menu TypeProps commment's
     */
    menu: string
    value: boolean
    onClick: () => void
}

export function Accordion(props: AccordionTypeProps) {

    return (
        <div>
            <AccordionTitle title={props.menu} onClick={props.onClick}/>
            {!props.value && <AccordionBody/>}

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


function AccordionBody() {

    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}
