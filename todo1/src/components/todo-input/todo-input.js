import React, {Component}  from "react";
import './todo-input.css'
export default class TodoInput extends Component {
    state = {
      term: ''
    }
    onSearchChange = (e) => {
      const term = e.target.value
      this.setState({term})
      this.props.onSearchChange(term)
    }
    render() {
      return (
        <input type="text"
        className="form-control search-input"
        placeholder="type to search" 
        onChange={this.onSearchChange}
        value={this.state.term}/>
  
    )
    }
  }

