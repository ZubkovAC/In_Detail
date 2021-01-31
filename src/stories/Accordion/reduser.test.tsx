import {reducer, StateType, TOGGLE_COLLAPSED} from "./reduser";


test ('reducer should be -true-', ()=>{
    //data
    const state:StateType ={
        collapsed:false
    }

    //action
    const newState = reducer(state,{type:TOGGLE_COLLAPSED})

    //expection
    expect(newState.collapsed).toBe(true)
})

test ('reducer should be -false-', ()=>{
    //data
    const state:StateType ={
        collapsed:true
    }

    //action
    const newState = reducer(state,{type:TOGGLE_COLLAPSED})

    //expection
    expect(newState.collapsed).toBe(false)
})


test('reducer should be -Error-', ()=>{
    //data
    const state:StateType ={
        collapsed:true
    }

    //action
    expect(()=>{
        reducer(state,{type:'FAKE'})
    }).toThrowError()
})