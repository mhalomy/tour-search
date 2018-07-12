import React, { Component } from 'react';
import TourItem from './TourItem';

class TourList extends Component {
  renderTourItems(props) {
    const {result} = props;
    return result.map(tour => {
      return (
        <div key={tour.id} >
          <TourItem tour={tour} />
        </div>
      );
    });
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