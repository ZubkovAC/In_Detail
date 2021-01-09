import React, {useState} from "react";

type UnContAccordionTypeProps = {
    menu:string

}
type UnContAccordionTitleTypeProps ={
    title:string
    onClick: ()=>void
}

function UnContAccordion (props:UnContAccordionTypeProps){

    let [on,setOn] = useState(true)

    return(
        <div>
            <UnContAccordionTitle title={props.menu} onClick={ ()=> { setOn(!on)}}/>

            { !on &&<UnContAccordionBody/> }

        </div>
    )
}


function UnContAccordionTitle (props:UnContAccordionTitleTypeProps){

    return (
        <div>
            <h3 onClick={ () => { props.onClick()}}>{props.title}</h3>
        </div>
    )
}
function UnContAccordionBody () {

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