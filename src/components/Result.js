import React from 'react';
import TourList from './TourList';

const Result = (props) => {
  return (
    <div>
      <TourList {...props} />
    </div>
  );
}

export default Result;