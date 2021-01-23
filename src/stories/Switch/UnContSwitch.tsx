import React, {useState} from "react";

export type SwitchPropsType= {
    onClick:boolean
}



export function UnContSwitch(props: SwitchPropsType) {

    let [on,setOn] = useState(true)


    const StyleSwitch ={

        /*position: 'absolute',*/
        right:'50px',
        top:'20px'
    }
    const StyleOn = {
        display: 'inline-block',
        width: '50px',
        height: '40px',
        border: '1px solid grey',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0,0,0,0.5)',

        backgroundColor: on ? 'limegreen' : 'white',
        padding:'3px',
        fontWeight:600,
        color:on ? 'red':'black'
    }
    const StyleOff = {
        display: 'inline-block',
        border: '1px solid grey',
        width: '70px',
        height: '40px',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0,0,0,0.5)',
        backgroundColor: on ? 'white' : 'red',
        padding:'3px',
        fontWeight:600,
        color:on ? 'black':'limegreen',
    }
    const StyleLamp = {
        display: 'inline-block',
        marginLeft:'10px',
        marginTop: '10px',
        padding: '10px',
        width: '20px',
        height: '20px',
        border: '1px solid grey',
        borderRadius: '50px',
        boxShadow: '0 0 10px rgba(0,0,0,0.5)',
        backgroundColor: on ? 'limegreen' : 'red'
    }

    return (
        <div style={StyleSwitch}>
            <div style={StyleOn} onClick={ ()=> { setOn ( true) } }>on</div>
            <div style={StyleOff} onClick={ ()=> { setOn(false) } }>off</div>
            <div style={StyleLamp}></div>
        </div>
    )
}
