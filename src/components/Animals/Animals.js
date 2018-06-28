import React from 'react';

import './Animals.css';

class Animals extends React.Component {
  render () {
    const { animals } = this.props;
    const mashupsItemComponents = animals.map((animal) => {
      return (

        <div class="col-sm-6 col-md-4">
          <div class="thumbnail">
            <img src={animal.imgUrl} alt="..." />
            <div class="caption">
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
