import React from 'react';
import './Workout.css';

const workout = (props) =>{
    return (
      <div className={"Workout"}>
        <p> This is {props.name} and learning {props.topic}</p>
      </div>
    )
};
export default workout;