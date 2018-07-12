import React from 'react';
import TourImage from './TourImage';

const TourItem = (props) => {
  return (
    <div>
      <TourImage {...props} />
    </div>
  );
}

export default TourItem;