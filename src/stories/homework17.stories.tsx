import React, {useMemo, useState} from "react";
import {Meta} from "@storybook/react/types-6-0";

export default {
    title: '17/useMemo-HomeWork ',
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta

type PresidentType= {
    id:number
    name:string,
    country:string
    countryPeople:number
}

export const Homework17Stories = () => {

    console.log("-HelpsToReactMemo-")

    const PresidentContainer = ( props:{presIdent: PresidentType[]} ) => {
        console.log('-UsersContainer')
        return <div>{
            props.presIdent.map(u => <div key={u.id}>{u.name}</div>)}
        </div>
    }

    const Inputi = ( props:{presIdent: PresidentType[]})  => {
        return (
        <div>
            <select >
                {
                    president.map( c => <option key={c.id}>{c.country}</option>)
                }
            </select>
        </div>

        )
    }



    const Users  = React.memo(PresidentContainer)

    const countryUSA =()=>{
        let dotCountru = presIdent.filter(c=>c.country!=='USA')
        setPresident([...dotCountru])
    }
    const countryRF =()=>{
        let dotCountru = presIdent.filter(c=>c.country!=='RF')
        setPresident([...dotCountru])
    }
    const countryUK =()=>{
        let dotCountru = presIdent.filter(c=>c.country!=='UK')
        setPresident([...dotCountru])
    }

    const president = [
        {id:1,name:'George Washington', country:'USA',countryPeople:321413446},
        {id:2,name:'John Adamsa', country:'USA',countryPeople:321413446},
        {id:3,name:' Thomas Jefferson', country:'USA',countryPeople:321413446},
        {id:4,name:'Putin', country:'RF',countryPeople:132413446},
        {id:5,name:'Medvedev', country:'RF',countryPeople:132413446},
        {id:6,name:'Shougy', country:'RF',countryPeople:132413446},
        {id:7,name:'Jnykvich', country:'UK',countryPeople:39413446},
        {id:8,name:'Kuchma', country:'UK',countryPeople:39413446},
        {id:9,name:'Zelenskui', country:'UK',countryPeople:39413446},
    ]

    //const [counter, setcounter] = useState(0)
    const [presIdent, setPresident] = useState<PresidentType[]>(president)




    return <>
        <Users presIdent={presIdent}/>
        <select >
            {
                presIdent.map( c =>

                     <option key={c.id}  >{c.country}</option>)
            }
        </select>
        {/*<button onClick={()=>{countryUSA}}>countryUSA</button>
        <button onClick={()=>{countryRF}}>countryRF</button>
        <button onClick={()=>{countryUK}}>countryUK</button>*/}
    </>
}