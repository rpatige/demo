import React, { Component } from 'react';
import './App.css';
import Workout from './Workout/Workout';

class App extends Component {


    State = {
        Notes: [
            {name: 'Rakesh', topic: 'React'},
            {name: 'Rakesh', topic: 'J2EE'},
            {name: 'Rakesh', topic: 'Spring'},
        ],
        something: 'What ever'
    }

    nameChnageHandler = () => {
        console.log("I am working wats up");
        this.setState({
            Notes:[
            {name: 'Raki', topic: 'React JS'},
            {name: 'Raki', topic: 'Advance Java'},
            {name: 'Raki', topic: 'Spring & Hibernate'}
            ]
        })
    }


  render() {
      const btnStyle = {
          backgroundColor: 'white',
          font: 'inherit',
          border: '1px solid blue',
          padding: '8px',
          cursor: 'pointer'
      }
        return (
      <div className="App">
          <button
                style={btnStyle}
                    onClick={this.nameChnageHandler}>Switch</button>
          <div>
              <Workout
                  name = {this.State.Notes[0].name}
                  topic = {this.State.Notes[0].topic}/>

              <Workout
                  name = {this.State.Notes[1].name}
                  topic = {this.State.Notes[1].topic}/>
              <Workout
                  name = {this.State.Notes[2].name}
                  topic = {this.State.Notes[2].topic}/>
          </div>
      </div>
    );
  }
}

export default App;
