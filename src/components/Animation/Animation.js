import React, { Component } from 'react';
import './Animation.css';

class Animation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
    }
  }

  componentDidUpdate(newProps, newState){
    if(!newState.show){
      document.getElementById('fade').style = 'opacity: 0';
    }
    else{
      document.getElementById('fade').style = 'opacity: 1';
    }
  }

  toggleCollapse = () => {
    this.setState({
      show: !this.state.show,
    })
    
  }

  render() {
    return (
      <div className="Animation">
        <button onClick={this.toggleCollapse}>
            {this.state.show? 'Appear' : 'Dissapear'}
        </button>
        <div
          id = 'fade'
          className = {this.state.show? 'transition show' : 'transition'}
          >
          <h1>peekaboo</h1>
        </div>
      </div>
    )
  }
}

export default Animation;