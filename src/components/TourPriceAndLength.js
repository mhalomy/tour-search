import React from 'react';

const TourPriceAndLength = (props) => {
  const {tour} = props;
  return (
    <div style={styles.mainWrapper} >
      <div style={styles.priceWrapper} >
        <div>
          <div>Our saving</div>
          <div style={styles.savingPrice} >€{tour.saving}</div>
        </div>
        <div style={styles.fromWrapper} >
          <div style={styles.fromItems} >From</div>
          <div style={styles.fromItems, styles.tourPrice} >€ {tour.price}</div>
        </div>
      </div>
      <div style={styles.lengthItem} >
        {tour.length} days
      </div>
    </div>
  );
}

const styles = {
  mainWrapper: {
    padding: '16px',
    maxWidth: '100%',
  },
  priceWrapper: {
    display: 'flex',
    marginBottom: '15px',
  },
  fromItems: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 'auto',
    textAlign: 'right',
  },
  lengthItem: {
    textAlign: 'center',
    fontSize: '1.286em',
    fontWeight: '700',
    marginTop: '15px',
    borderTop: '1px solid #c7d0d9',
    borderBottom: '1px solid #c7d0d9',
    lineHeight: '18px',
    padding: '10px',
  },
  savingPrice: {
    fontSize: '1.286em',
  },
  tourPrice: {
    fontSize: '1.286em',
    fontWeight: '700',
  }
}

export default TourPriceAndLength;