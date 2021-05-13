import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../../helpers/actionCreators/userActionCreators';
import Error from '../components/common/error';
import Spinner from '../components/common/spinner';
import {Redirect} from 'react-router-dom';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        }
    }
    
    onLogin=()=>{
        console.log(JSON.stringify(this.state));
        this.props.loginUser(this.state);
    }

    onUserNameChange=(event)=>{
        this.setState({
            userName: event.target.value
        })
    }

    onPasswordChange=(event)=>{
        this.setState({
            password: event.target.value
        })
    }

    render() {
        const {token, isLoading, error, errorMsg} = this.props;
        return (
            <div>
                <label>Username</label>
                <input type='text' value={this.state.userName} onChange={(e)=>{this.onUserNameChange(e)}}/><br/>
                <label>Password</label>
                <input type='password'  value={this.state.password} onChange={(e)=>{this.onPasswordChange(e)}}/><br/>
                <input type='submit' value='Login' onClick={this.onLogin}/>
                {
                    isLoading ? <Spinner/> :
                    error ? <Error errorMsg = {errorMsg}/>: 
                    token ? <Redirect to='/student' /> : null
                }
                
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return state.currentUser;
}

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);