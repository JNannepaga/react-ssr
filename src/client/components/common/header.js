import React from 'react';
import {Link} from 'react-router-dom';

export default () => {
    return(
        <>
        <Link to='/'>Home</Link><br/>
        <Link to='/login'>Log in</Link><br/>
        <Link to='/student'>Get Student Details</Link>
        </>
    )
}