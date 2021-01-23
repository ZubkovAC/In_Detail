import React from "react";

type AccordionTypeProps = {
    menu:string
    value:boolean
    onClick:()=>void
}

function Accordion (props:AccordionTypeProps){

    return(
        <div>
            <AccordionTitle title={props.menu} onClick={props.onClick} />
            { !props.value &&<AccordionBody/>}

        </div>
    )
}

type AccordionTitleTypeProps ={
    title:string
    onClick:()=>void
}


function AccordionTitle (props:AccordionTitleTypeProps){
    return (
        <div>
            <h3 onClick={()=>props.onClick()} >{props.title}</h3>
        </div>
    )
}

/*type AccordionBodyTypeProps = {
    nvalue:boolean
}*/


function AccordionBody () {

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


/*
if (props.nvalue){
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

return (
    <div>
        <ul>
            <li>Setting</li>
            <li>Lan</li>
            <li>Grafics</li>
        </ul>
    </div>
)
}*/

export default Accordion
