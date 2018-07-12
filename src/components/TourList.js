import React from 'react';
import TourItem from './TourItem';

const TourList = (props) => {
  return (
    <div>
      <TourItem {...props} />
    </div>
  );
}

export default TourList;