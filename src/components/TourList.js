import React, { Component } from 'react';
import TourItem from './TourItem';

class TourList extends Component {
  renderTourItems(props) {
    let {result, sort} = props;
    if(result && sort === 'lowestPrice') {
      result.sort((a, b) => a.price - b.price)
      return result.map(tour => {
        return (
          <div key={tour.id} >
            <TourItem tour={tour} />
          </div>
        );
      });
    } else if(result && sort === 'highestPrice') {
      result.sort((a, b) => b.price - a.price)
      return result.map(tour => {
        return (
          <div key={tour.id} >
            <TourItem tour={tour} />
          </div>
        );
      });
    } else if(result && sort === 'longestTour') {
      result.sort((a, b) => b.length - a.length)
      return result.map(tour => {
        return (
          <div key={tour.id} >
            <TourItem tour={tour} />
          </div>
        );
      });
    } else if(result && sort === 'shortestTour') {
      result.sort((a, b) => a.length - b.length)
      return result.map(tour => {
        return (
          <div key={tour.id} >
            <TourItem tour={tour} />
          </div>
        );
      });
    }
  }

  render() {
    return (
      <div>
        {this.renderTourItems(this.props)}
      </div>
    );
  }
}

export default TourList;