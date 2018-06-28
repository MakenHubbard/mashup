import React from 'react';

import './FormField.css';

class Forms extends React.Component {
  render () {
    return (
      <form class="form-horizontal">
        <div class="form-group">
          <label for="exampleInputEmail1">Name: </label>
          <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" />
        </div>

        <div class="form-group">
          <label for="exampleInputPassword1">Image URL: </label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>

        <div class="form-group">
          <label for="exampleTextArea">Description: </label>
          <textarea class="form-control" id="exampleTextArea" rows="5"></textarea>
        </div>

        <button type="submit" class="btn btn-success">Add Mashup</button>
      </form>
    );
  }
}

export default Forms;
