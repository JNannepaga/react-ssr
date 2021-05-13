import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../../helpers/actionCreators/studentActionCreators';
import ErrorBoundary from '../components/common/errorBoundary';
import Error from '../components/common/error';
import Spinner from '../components/common/spinner';
import {StudentCard} from '../components/studentCard';

class StudentPage extends PureComponent
{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    componentDidMount(){
        if(this.props.getStudent == null){
            this.props.fetchStudent(1);
        }
    }   

    render(){
        const {getStudent, isLoading, error, errorMsg} = this.props;           
        return(
        <ErrorBoundary>
            {
                isLoading ? <Spinner/> :
                getStudent != null ? <StudentCard {...getStudent}/> :
                error ?  <Error errorMsg = {errorMsg}/> : <h4>No Data Found</h4>
            }    
        </ErrorBoundary>)
    }
}


const mapStateToProps = (state) => {
    return state.student;
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
}

export const loadStudentData= (store) =>{
    return store.dispatch(actionCreators.fetchStudent(1));
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentPage);