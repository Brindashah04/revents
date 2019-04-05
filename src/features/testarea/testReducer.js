import { createReducer } from '../../app/common/util/reducerUtil'
import{ INCREMENT_COUNTER, DECREMENT_COUNTER } from './testConstants';


const initialState = {
    data: 2773
}

export const incrementCounter = (state,payLoad) => {
    return {...state, data: state.data+1}
}

export const decrementCounter = (state,payLoad) => {
    return {...state, data: state.data-1}
}

//const testReducer = (state = initialState, action) => {
//    switch (action.type) {
//      case INCREMENT_COUNTER:
//            return {...state, data: state.data+1}
//        case DECREMENT_COUNTER:
//            return {...state, data: state.data-1}
//        default:
//            return state;
//    }
//};

export default createReducer(initialState, {
    [INCREMENT_COUNTER]: incrementCounter,
    [DECREMENT_COUNTER]: decrementCounter
})