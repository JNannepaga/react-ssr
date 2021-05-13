import * as actiontypes from '../actionCreators/actiontypes';

export function studentReducer(state, action){
    switch (action.type) {
        case actiontypes.FETCH_STUDENT_START:
            return {...state, isLoading: true};

        case actiontypes.FETCH_STUDENT_SUCCESS:
            return {...state, isLoading: false, error: false, getStudent: action.payload};

        case actiontypes.FETCH_ALL_STUDENTS_SUCCESS:
            return {...state, isLoading: false, error: false, getAllStudents: action.payload};
        
        case actiontypes.FETCH_STUDENT_FAILED:
            return {...state, isLoading: false, error: true, errorMsg: action.payload};
        
        default:
            return {...state};
    }  
}