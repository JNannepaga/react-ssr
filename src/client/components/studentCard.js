import React from 'react';

export function StudentCard({RollId, Standard, FullName})
{
    return(
    <div>
        <h3>Roll Number : {RollId}</h3>
        Standard : {Standard}<br/>
        Name : {FullName}<br/>
    </div>)
}