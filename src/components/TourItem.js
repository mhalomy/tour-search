import React from 'react';
import TourImage from './TourImage';
import TourInfo from './TourInfo';

const TourItem = (props) => {
  const {tour} = props;
  return (
    <div>
      <TourImage tour={tour} />
      <TourInfo tour={tour} />
    </div>
  );
}

export default TourItem;