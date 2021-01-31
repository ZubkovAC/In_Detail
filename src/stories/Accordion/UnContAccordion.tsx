import React, {useReducer, useState} from "react";
import {reducer} from "./reduser";

export  type UnContAccordionTypeProps = {
    menu: string
}

type UnContAccordionTitleTypeProps = {
    title: string
    onClick: () => void
}

export const UnContAccordion =React.memo(UnContAccordionSecret)

export function UnContAccordionSecret(props: UnContAccordionTypeProps) {

    let [on, setOn] = useState(true)
    let [state, dispatch] = useReducer(reducer,{collapsed:false})

    return (
        <div>
          {/*  <UnContAccordionTitle title={props.menu} onClick={() => {
                setOn(!on)
            }}/>
            {!on && <UnContAccordionBody/>}
            */}
            <UnContAccordionTitle title={props.menu} onClick={() => {
                dispatch({type:'TOGGLE-COLLAPSED'})
            }}/>
            {!state.collapsed && <UnContAccordionBody/>}

        </div>
    )
}


function UnContAccordionTitle(props: UnContAccordionTitleTypeProps) {

    return (
        <div>
            <h3 onClick={() => {
                props.onClick()
            }}>{props.title}</h3>
        </div>
    )
}

function UnContAccordionBody() {

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

export default UnContAccordion