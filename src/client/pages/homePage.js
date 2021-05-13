import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class HomePage extends Component {
    
    render() {
        return (
            <div>
               <Link to="student">Student Card</Link><br/>
               <button onClick={()=>{console.log('I am clicked');}}>click me</button>
            </div>
        );
    }
}

export default HomePage;