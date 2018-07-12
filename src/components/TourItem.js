import React from 'react';
import TourImage from './TourImage';
import TourInfo from './TourInfo';
import TourPriceAndLength from './TourPriceAndLength';

const TourItem = (props) => {
  const {tour} = props;
  return (
    <div style={styles.wrapper} >
      <TourImage tour={tour} />
      <TourInfo tour={tour} />
      <TourPriceAndLength tour={tour} />
    </div>
  );
}

const styles = {
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap'
  }
}

export default TourItem;