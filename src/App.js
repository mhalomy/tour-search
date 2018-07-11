import React, { Component } from 'react';
import Search from './components/Search';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  render() {
    return (
      <div>
        <Search
          value={this.state.term}
          placeholder="Where do you want to go?"
          onChange={(event) => this.setState({term: event.target.value})} />
      </div>
    );
  }
}

export default App;
