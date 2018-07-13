import React, { Component } from 'react';

class TourInfo extends Component {

  renderInfoLabel(props) {
    return (
      <div style={styles.labelWrapper} >
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
      <div style={styles.valueWrapper} >
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
      <div style={styles.mainWrapper} >
        <div style={styles.tourName} >{tour.tour_name}</div>
        <p style={styles.tourDesc} >{tour.description}</p>
        <div style={styles.labelAndValueWrapper} >
          {this.renderInfoLabel(this.props)}
          {this.renderInfoValue(this.props)}
        </div>
      </div>
    );
  }
}

const styles = {
  mainWrapper: {
    padding: '16px',
  },
  labelAndValueWrapper: {
    display: 'flex',
    lineHeight: '18px'
  },
  labelWrapper: {
    fontSize: '0.714em',
    color: '#818d99',
    marginRight: '10px'
  },
  valueWrapper: {
    fontSize: '0.857em'
  },
  tourName: {
    fontSize: '1.286em',
    fontWeight: '700',
    lineHeight: '20px'
  },
  tourDesc: {
    fontSize: '1em',
    lineHeight: '20px'
  }
}

export default TourInfo;