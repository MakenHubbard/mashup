import React, { Component } from 'react';

import Animals from '../components/Animals/Animals';
import connection from '../firebaseRequests/connections';
import animalsRequest from '../firebaseRequests/animals';
import FormField from '../components/FormField/FormField';

import './App.css';

class App extends Component {
  state = {
    animals: [],
  }
  componentDidMount () {

    connection();
    animalsRequest.getRequest()
      .then((animals) => {
        this.setState({ animals });
      })
      .catch((err) => {
        console.error('error with mashups GET', err);
      });
  }

  render () {
    return (
      <div className="App">
        <div className="col-sm-6">
          <Animals animals={this.state.animals}/>
        </div>
        <div className="col-sm-6">
          <FormField />
        </div>
      </div>
    );
  }
}

export default App;
