import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

  this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
          <button onClick={search => this.searchvideos(this.state.term)}>Search</button>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
   
  }

  searchvideos(term){
     this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
