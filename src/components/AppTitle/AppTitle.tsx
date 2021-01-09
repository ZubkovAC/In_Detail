import React from "react";

type AppTitleTypeProps ={
    title:string
}


function AppTitle (props:any){
    return <h2>{props.title}</h2>
}

export default AppTitle