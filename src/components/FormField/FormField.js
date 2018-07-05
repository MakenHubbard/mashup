import React from 'react';

import PropTypes from 'prop-types';

import './FormField.css';

const defaultAnimal = {
  name: '',
  imgUrl: '',
  description: '',
};

class Forms extends React.Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    newAnimal: defaultAnimal,
  }

  formFieldStringState = (info, e) => {
    const tempAnimal = { ...this.state.newAnimal };
    tempAnimal[info] = e.target.value;
    this.setState({ newAnima: tempAnimal });
  }

  nameChange = (e) => {
    this.formFieldStringState('name', e);
  }

  imageChange = (e) => {
    this.formFieldStringState('imgUrl', e);
  }

  descriptionChange = (e) => {
    this.formFieldStringState('description', e);
  }

  formSubmit = (e) => {
    const { onSubmit } = this.props;
    const { newAnimal } = this.state;
    e.preventDefault();
    if (
      newAnimal.name &&
      newAnimal.imgUrl &&
      newAnimal.description
    ) {
      onSubmit(this.state.newAnimal);
      this.setState({ newAnimal: defaultAnimal });
    } else {
      alert('dubya tea Eff mate');
    }
  }

  render () {
    const { newAnimal } = this.state;
    return (
      <div className="col-xs-12">
        <form onSubmit={this.formSubmit} className="form-horizontal">
          <div >
            <fieldset className="col-xs-3">
              <label htmlFor="name">Name:</label>
              <input
                className="col-xs-12"
                type="text"
                id="name"
                value={newAnimal.name}
                onChange={this.nameChange}
              />
            </fieldset>
          </div>

          <div >
            <fieldset className="col-xs-3">
              <label htmlFor="imgUrl">Image Url:</label>
              <input
                className="col-xs-12"
                type="text"
                id="imgUrl"
                value={newAnimal.imgUrl}
                onChange={this.imageChange}
              />
            </fieldset>
          </div>

          <div >
            <fieldset className="col-xs-12">
              <label htmlFor="description">Description:</label>
              <textarea
                className="col-xs-12"
                type="text"
                id="description"
                value={newAnimal.description}
                onChange={this.description}
              />
            </fieldset>
          </div>
          <button type="submit" className="btn btn-success">Add Mashup</button>
        </form>
      </div>
    );
  }
}

export default Forms;
