import {api_helper} from './api_helper';

export const getStudentByIdAsync = async (api, Id) => {
    const buildUri = `Student/GetStudentByRollNumber?rollNumber=${Id}`;
    return api_helper(api).get(buildUri);
};


export const getAllStudentsAsync = () => async(dispatch, api) =>{
    const buildUri = `Student/GetAllStudents`;
    return api_helper(api).get(buildUri);
}
