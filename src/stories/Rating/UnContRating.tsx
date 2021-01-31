import React, {useState} from "react";

type UnStarTypeProps = {
    selected: boolean
    setValue: (value: number) => void
    value:number
}
export type UnContRatingTypeProps = {
    count: number
}

export const UnContRating = React.memo(UnContRatingSecret)

export function UnContRatingSecret(props: UnContRatingTypeProps) {


    let [on, setOn] = useState(1)

    /*
        <Star selected={on > 0}/><button onClick={ () => { setOn(1)}}>&#8899;</button>
        <Star selected={on > 1}/><button onClick={ () => { setOn(2)}}>&#8899;</button>
        <Star selected={on > 2}/><button onClick={ () => { setOn(3)}}>&#8899;</button>
        <Star selected={on > 3}/><button onClick={ () => { setOn(4)}}>&#8899;</button>
        <Star selected={on > 4}/><button onClick={ () => { setOn(5)}}>&#8899;</button>
        */
    return (
        <div>
            <Star selected={on > 0} setValue={setOn} value={1}/>
            <Star selected={on > 1} setValue={setOn} value={2}/>
            <Star selected={on > 2} setValue={setOn} value={3}/>
            <Star selected={on > 3} setValue={setOn} value={4}/>
            <Star selected={on > 4} setValue={setOn} value={5}/>
        </div>
    )
}

//const SpanB =<span><b>star</b> &#10026;</span>
//const Span = <span>star &#10032;</span>
//const  Star= (props:any) => props.selected ? SpanB : Span
export function Star(props: UnStarTypeProps) {
    return <span onClick={() => {
        props.setValue(props.value)}}>
          {props.selected ? <b> &#10026; </b> : <b> &#10032; </b> }
            </span>
}

/*// const  Star= (props:any) => props.selected ? <span><b>star</b> &#10026;</span> : <span>star &#10032;</span>*/

/*


    if (props.selected) {
        return <span><b>star</b> &#10026;</span>
    }else {
        return <span>star &#10032;</span>
    }

*/

