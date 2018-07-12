import React from 'react';
import TourImage from './TourImage';
import TourInfo from './TourInfo';
import TourPriceAndLength from './TourPriceAndLength';

const TourItem = (props) => {
  const {tour} = props;
  return (
    <div>
      <TourImage tour={tour} />
      <TourInfo tour={tour} />
      <TourPriceAndLength tour={tour} />
    </div>
  );
}

export default TourItem;