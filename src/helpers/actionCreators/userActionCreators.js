import * as actiontypes from './actiontypes';
import {getTokenAsync} from '../api/user_api';

export const loginUser = (credentials) => {
    return {
        type: getTokenAsync, 
        payload: [...credentials], 
        processCallStack:{
            Start: loginUserStart,
            Success: loginUserSuccess,
            Failure: loginUserFailed
        }
    };
}

export const loginUserStart = () =>{
    return {type: actiontypes.LOGIN_USER_START};
}

export const loginUserSuccess = (data) =>{
    return {type: actiontypes.LOGIN_USER_SUCCESS, payload: data};
}

export const loginUserFailed = (error) =>{
    return {type: actiontypes.LOGIN_USER_FAILED, payload: error};
}