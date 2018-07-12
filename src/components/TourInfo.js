import React, { Component } from 'react';

class TourInfo extends Component {

  renderInfoLabel(props) {
    return (
      <div>
        <div>DESTINATIONS</div>
        <div>STARTS/ENDS IN</div>
        <div>AGE RANGE</div>
        <div>COUNTRY</div>
        <div>OPERATOR</div>
      </div>
    );
  }

  renderInfoValue(props) {
    const {tour} = props;
    return (
      <div>
        <div>{this.calculateDestinations(tour)}</div>
        <div>{this.calculateStartEnd(tour)}</div>
        <div>{tour.age_from} to {tour.age_to} year olds</div>
        <div>{tour.country}</div>
        <div>{tour.tour_operator}</div>
      </div>
    );
  }

  calculateDestinations(tour) {
    return tour.destinations.length + " destinations";
  }

  calculateStartEnd(tour) {
    return `${tour.destinations[0]} / ${tour.destinations[tour.destinations.length - 1]}`;
  }

  render() {
    const {tour} = this.props;
    return (
      <div>
        <div>{tour.tour_name}</div>
        <div>{tour.description}</div>
        <div style={styles.labelWrapper} >
          {this.renderInfoLabel(this.props)}
          {this.renderInfoValue(this.props)}
        </div>
      </div>
    );
  }
}

const styles = {
  labelWrapper: {
    display: 'flex'
  }
}

export default TourInfo;