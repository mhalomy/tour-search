import React from 'react';

const TourPriceAndLength = (props) => {
  const {tour} = props;
  return (
    <div>
      <div style={styles.priceWrapper} >
        <div>
          <div>Our saving</div>
          <div>€{tour.saving}</div>
        </div>
        <div>
          <div style={styles.fromItems} >From</div>
          <div style={styles.fromItems} >€ {tour.price}</div>
        </div>
      </div>
      <div style={styles.lengthItem} >
        {tour.length} days
      </div>
    </div>
  );
}

const styles = {
  priceWrapper: {
    display: 'flex'
  },
  fromItems: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 'auto',
    textAlign: 'right'
  },
  lengthItem: {
    textAlign: 'center'
  }
}

export default TourPriceAndLength;