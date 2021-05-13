import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../../helpers/actionCreators/studentActionCreators';
import ErrorBoundary from '../components/common/errorBoundary';
import Error from '../components/common/error';
import Spinner from '../components/common/spinner';
import {StudentCard} from '../components/studentCard';

class StudentsPage extends PureComponent
{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    componentDidMount(){
        if(this.props.getAllStudents == null){
            this.props.fetchAllStudents();
        }
    }   

    render(){
        const {getAllStudents, isLoading, error, errorMsg} = this.props;           
        return(
        <ErrorBoundary>
            {
                isLoading ? <Spinner/> :
                getAllStudents != null ? getAllStudents.map(stud => {
                    return <StudentCard {...stud}/>
                })  :
                error ?  <Error /> : <h4>No Data Found</h4>
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

export const loadAllStudentsData= (store) =>{
    return store.dispatch(actionCreators.fetchAllStudents());
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentsPage);