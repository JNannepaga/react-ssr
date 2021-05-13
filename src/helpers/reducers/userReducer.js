import * as actiontypes from '../actionCreators/actiontypes';

export function userReducer(state, action){
    switch (action.type) {
        case actiontypes.LOGIN_USER_START:
            return {...state, isLoading: true};

        case actiontypes.LOGIN_USER_SUCCESS:
            return {...state, isLoading: false, error: false, token: action.payload};

        case actiontypes.LOGIN_USER_FAILED:
            return {...state, isLoading: false, error: true, errorMsg: action.payload};
        
        default:
            return {...state};
    }  
}