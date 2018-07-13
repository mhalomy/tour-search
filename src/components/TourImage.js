import React, { Component } from 'react';
import LazyLoad from 'react-lazy-load';

class TourImage extends Component {

  renderImages(props) {
    const {tour} = props;
    return (
      <div>
        <LazyLoad>
          <img
            src={tour.tour_image}
            style={{width: 232}}
            alt={`${tour.tour_name} Tour`} />
        </LazyLoad>

        <LazyLoad>
          <img
            src={tour.map_image}
            style={{width: 232}}
            alt={`${tour.tour_name} - ${tour.destinations.length} destinations`} />
        </LazyLoad>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderImages(this.props)}
      </div>
    );
  }
}

export default TourImage;