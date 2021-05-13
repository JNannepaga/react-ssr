import React, { Component } from 'react';
import {renderRoutes} from 'react-router-config';
import Header from '../client/components/common/header';

class App extends Component {
    render() {
        const {route} = this.props;
        return (
            <>
                <Header/>
               {renderRoutes(route.routes)}
            </>
        );
    }
}

export default App;