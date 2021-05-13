import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isError: false
        }
    }
    
    static getDerivedStateFromError(){
        return {isError: true};
    }

    componentDidCatch(error){
        console.log(`${new Date().getTime()} :: ${error}`);
    }

    render() {
        const {isError} = this.state;
        if(isError){
            return (
                <h4> Something went wrong </h4>
            );
        }
        else{
            return this.props.children;
        }
        
    }
}

export default ErrorBoundary;