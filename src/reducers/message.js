import * as msg from './../constants/Message';
import * as types from './../constants/ActionTypes';
 

var initialState = msg.MSG_WELCOM;

const message = (state = initialState, action) => {
    switch(action.type) {
        case types.CHANGE_MSG: 
            return action.message;
        default: return state;
    }
}

export default message;