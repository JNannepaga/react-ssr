import React, { Component } from 'react';

class Error extends Component {
    render() {
        const {errorMsg} = this.props;
        return (
            errorMsg != null ? <h4>{errorMsg}</h4>: <h4> Something went wrong </h4>
        );
    }
}

export default Error;