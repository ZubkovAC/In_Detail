import React from "react";

export type StarTypeProps = {
    selected:boolean
    onClick:()=>void
}
export type RatingTypeProps ={
    number:0|1|2|3|4|5
    onClick:(id:0|1|2|3|4|5)=>void
}

export const Rating = React.memo(RatingSecret)

export function RatingSecret (props:RatingTypeProps) {

    return (
        <div>
            <Star selected={props.number > 0} onClick={()=>{props.onClick(1)}}/>
            <Star selected={props.number > 1} onClick={()=>{props.onClick(2)}}/>
            <Star selected={props.number > 2} onClick={()=>{props.onClick(3)}}/>
            <Star selected={props.number > 3} onClick={()=>{props.onClick(4)}}/>
            <Star selected={props.number > 4} onClick={()=>{props.onClick(5)}}/>
        </div>
    )
}

function Star (props:StarTypeProps) {
    return <span onClick={ ()=>{props.onClick()}}>
        {props.selected ? <b> &#10026;</b> : <b> &#10032;</b>}
    </span>
}

    /*
    if (props.selected) {
        return <span><b>star</b> &#10026;</span>
    }else {
        return <span>star &#10032;</span>
    }
}*/
    /*

    if (props.number === 1) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>

            </div>
        )
    }
    if (props.number === 2) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>

            </div>
        )
    }
    if (props.number === 3) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>

            </div>
        )
    }
    if (props.number === 4) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>

            </div>
        )
    }

    return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>

        </div>
    )
}


*/




