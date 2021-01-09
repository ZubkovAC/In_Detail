import React  from "react";


type SwitchPropsType ={
    value:boolean
    onClick:(value:boolean)=>void
}


export function Switch(props: SwitchPropsType) {




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
        backgroundColor: props.value? 'limegreen' : 'white',
        padding:'3px',
        fontWeight:600,
        color:props.value ? 'red':'black'
    }
    const StyleOff = {
        display: 'inline-block',
        border: '1px solid grey',
        width: '70px',
        height: '40px',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0,0,0,0.5)',
        backgroundColor: props.value ? 'white' : 'red',
        padding:'3px',
        fontWeight: 600,
        color:props.value ? 'black':'limegreen',
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
        backgroundColor: props.value ? 'limegreen' : 'red'
    }


    return (
        <div style={StyleSwitch}>
            <div style={StyleOn} onClick={ ()=> { props.onClick (true) } }>on</div>
            <div style={StyleOff} onClick={ ()=> { props.onClick(false) } }>off</div>
            <div style={StyleLamp}></div>
        </div>
    )
}
