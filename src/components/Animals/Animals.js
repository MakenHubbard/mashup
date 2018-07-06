import React from 'react';
import PropTypes from 'prop-types';

import { animalShape } from '../../propz/animalPropz';

import './Animals.css';

class Animals extends React.Component {
  static propTypes = {
    animals: PropTypes.arrayOf(animalShape),
  }

  render () {
    const { animals } = this.props;
    const mashupsItemComponents = animals.map((animal) => {
      // need to fix this in a way it will work its not liking the returns
      return (
        <div key={animal.id} className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <img src={animal.imgUrl} alt="..." />
            <div className="caption">
              <h3>{animal.name}</h3>
              <p>{animal.description}</p>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="Animals">
        {mashupsItemComponents}
      </div>
    );
  }
}

export default Animals;
