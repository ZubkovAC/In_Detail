
type ActionType = {
    type: string
}
export let TOGGLE_COLLAPSED= 'TOGGLE-COLLAPSED'

export type StateType = {
    collapsed:boolean
}



export const reducer = (state: StateType, action: ActionType):StateType => {
    switch(action.type) {
        case TOGGLE_COLLAPSED :
            return {
                ...state,
                collapsed : !state.collapsed
            }                // need copy - Update React

        default:
            throw new Error('Bad action type')
    }

}