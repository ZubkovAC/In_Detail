import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import AppTitle from "./components/AppTitle/AppTitle";
import { UnContSwitch } from './components/Switch/UnContSwitch';
import UnContAccordion from './components/Accordion/UnContAccordion';
import {UnContRating} from "./components/Rating/UnContRating";
import {Switch} from "./components/Switch/Switch";


const App = () => {

    const [oneAccordion,twoAccordion]=useState<true | false>(false)
    const [oneRating,twoRating] = useState<0|1|2|3|4|5>(1)
    let [oneSwitch,twoSwitch] = useState(false)

    return (
        <div className='box'>
            <AppTitle title={'This is APP components'}/>
            <AppTitle title={'Good morning!'}/>
            <AppTitle title={'Life Is Good'}/>

            <Accordion menu={'Menu'} value={oneAccordion} onClick={()=>{twoAccordion(!oneAccordion)}}  />
           {/* <Accordion menu={'Option'} value={false}  onClick={ ()=>{twoAccordion(!oneAccordion)}}  />
            <UnContAccordion menu={'Option'} />*/}
            <UnContAccordion menu={'Hello'} />

             <Rating number={oneRating} onClick={twoRating}/>
            <UnContRating number={oneRating}/>




            <Switch value={oneSwitch} onClick={twoSwitch}/>
            <UnContSwitch />

        </div>
    );

}




export default App;


