import React, { Component } from 'react';

class TourImage extends Component {

  renderImages(props) {
    const {result} = props;
    if (result) {
      return result.map(tour => {
        return (
          <div key={tour.id} >
            <div>
              <img src={tour.tour_image} style={{width: 232}} alt="" />
            </div>
            <div>
              <img src={tour.map_image} style={{width: 232}} alt="" />
            </div>
          </div>

        );
      });
    }
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