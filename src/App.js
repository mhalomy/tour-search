import React, { Component } from 'react';
import Search from './components/Search';
import Result from './components/Result';

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tours: '',
      term: '',
      result: [],
      price: 0,
      duration: 0,
      filter: ''
    };
  }

  componentDidMount() {
    fetch('https://api.myjson.com/bins/18x6yt')
      .then(res => res.json())
      .then(tours => this.setState({tours}));
  }

  onTermChange(event) {
    this.setState({term: event.target.value.capitalize()})
  }

  onKeyPress(event) {
    if(event.key === 'Enter') {
      this.performSearch();
    }
  }

  performSearch() {
    if(this.state.tours.length) {
      let result = [];
      this.state.tours.map(tour => {
        if(tour.country.includes(this.state.term) || tour.destinations.includes(this.state.term)) {
          result.push(tour)
        }
        return result;
      });
      this.setState({result})
    }
  }

  render() {
    return (
      <div>
        <Search
          value={this.state.term}
          placeholder="Where do you want to go?"
          onChange={this.onTermChange.bind(this)}
          onKeyPress={this.onKeyPress.bind(this)} />

        <Result {...this.state} />

      </div>
    );
  }
}

export default App;
