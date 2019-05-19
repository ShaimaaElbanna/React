import React, { Component } from "react";

class DynamicList extends Component {
  state = { 
    list:
    [{
      id: 1,
      description: "Get out of bed",
      deadline: "2017-09-11",
      done: true
    },
    {
      id: 2,
      description: "Brush teeth",
      deadline: "2017-09-10",
      done: false
    },
    {
      id: 3,
      description: "Eat breakfast",
      deadline: "2017-09-09",
      done: false
    }]
  };
  
  render() {
  
    return (
      <div>
                <h1>This is my Dynamic List  </h1>

        <ul>
        {this.state.list.map(item => (
              <li key={item.id}><strong>description: </strong>{item.description}
              <br></br>
              <strong>Deadline: </strong>{item.deadline}
              <br></br>
              <strong>Status:</strong>
              {" " + item.done}
              </li>
            
          ))}
        </ul>
      </div>
    )
  }
}

export default DynamicList;