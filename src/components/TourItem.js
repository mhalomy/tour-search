import React from 'react';
import TourImage from './TourImage';
import TourInfo from './TourInfo';
import TourPriceAndLength from './TourPriceAndLength';

const TourItem = (props) => {
  const {tour} = props;
  return (
    <div style={styles.wrapper} >
      <TourImage tour={tour} />
      <div style={styles.infoWrapper} >
        <TourInfo tour={tour} />
        <TourPriceAndLength tour={tour} />
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    minHeight: '246px',
    background: 'white',
    marginBottom: '28px',
    marginLeft: '14px',
    marginRight: '14px',
  },
  infoWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    flexGrow: '1',
    justifyContent: 'space-between',
  }
}

export default TourItem;