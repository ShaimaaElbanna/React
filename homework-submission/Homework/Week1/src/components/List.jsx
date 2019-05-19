import React, { Component } from "react";

class List extends Component {
  state = { 
  };

  render() {
    return (
      <div>
        <h1>This is my Static List  </h1>
        <ul>
          <li>Get out of bed, Wed Sep 13 2017</li>
          <li>Brush teeth, Thu Sep 14 2017</li>
          <li>Eat breakfast, Fri Sep 15 2017</li>
          </ul>
      </div>
      
    );
  }
}

export default List;
