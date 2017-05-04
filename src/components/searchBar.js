import React from 'react';
import { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {query: ''}
  }

  render() {
    return (
      <div>
        <input onChange={event => this.setState({query: event.target.value})} />
        Значение input: {this.state.query}
      </div>
    );
  }
}

export default SearchBar;