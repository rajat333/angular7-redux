import { Action } from '@ngrx/store'
import { Tutorial } from './../models/tutorial.model'
import * as TutorialActions from './../actions/tutorial.actions'

// Section 1
const initialState: Tutorial = {
    name: 'Redux Tutorial For Nidhi',
    url: 'http://google.com'
}

// Section 2  
// Reducer Function Same as React Js Doc , take first parameter as state and 2nd as action
export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {

    // Section 3
    // Type of Action fire using dispatch method
    switch(action.type) {
        case TutorialActions.ADD_TUTORIAL:
            console.log('>> Add Reducer Case', state,action);    
            return [...state, action.payload];

        case TutorialActions.REMOVE_TUTORIAL:
                console.log('>> Remove Tutorial Reducer Case',state,action.payload,action);
                state.splice(action.payload, 1)
                return state;
        
        default:
            return state;
    }
}