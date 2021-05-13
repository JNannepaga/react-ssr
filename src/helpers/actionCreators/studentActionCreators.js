import * as actiontypes from './actiontypes';
import {getStudentByIdAsync, getAllStudentsAsync} from '../api/student_api';

export const fetchStudent = (Id) => {
    return {
        type: getStudentByIdAsync, 
        payload: [Id], 
        processCallStack:{
            Start: fetchStudentStart,
            Success: fetchStudentSuccess,
            Failure: fetchStudentFailed
        }
    };
};

export const fetchAllStudents = () =>{
    return getAllStudentsAsync();
}

export const fetchAllStudentsSuccess = (data) => {
    return {type: actiontypes.FETCH_ALL_STUDENTS_SUCCESS, payload: data};
};


export const fetchStudentStart = () => {
    return {type: actiontypes.FETCH_STUDENT_START};
};

export const fetchStudentSuccess = (data) => {
    return {type: actiontypes.FETCH_STUDENT_SUCCESS, payload: data};
};

export const fetchStudentFailed = (error) => {
    return {type: actiontypes.FETCH_STUDENT_FAILED, payload: error};
};