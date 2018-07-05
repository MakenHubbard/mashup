import React, { Component } from 'react';

import Animals from '../components/Animals/Animals';
import connection from '../firebaseRequests/connections';
import animalsRequest from '../firebaseRequests/animals';
import FormField from '../components/FormField/FormField';

import './App.css';

class App extends Component {
  state = {
    animals: [],
    addedAnimalId: -1,
  }

  addingAnimalEvent = (id) => {
    this.setState({
      addedAnimalId: id,
    });
  }

  formSubmitEvent = (newAnimal) => {
    animalsRequest.postRequest(newAnimal)
      .then(() => {
        animalsRequest.getRequest()
          .then((animals) => {
            this.setState({ animals });
          });
      })
      .catch((err) => {
        console.error('something went wrong in the post', err);
      });
  }

  componentDidMount() {

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
    const { addedAnimalId, animals } = this.state;
    // need to add keys to the animals trying that here
    const addedAnimal = animals.find(animal => animal.id === addedAnimalId);

    return (
      <div className="App">
        <div className="col-sm-6">
          <Animals
            animals={this.state.animals}
            addedAnimal={this.addingAnimalEvent}
            addedAnimal=
          />
        </div>
        <div className="col-sm-6">
          <FormField
            onSubmit={this.formSubmitEvent}
          />
        </div>
      </div>
    );
  }
}

export default App;
