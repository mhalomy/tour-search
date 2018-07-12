import React from 'react';

const TourPriceAndLength = (props) => {
  const {tour} = props;
  return (
    <div>
      <div>
        <div>
          <div>Our saving</div>
          <div>€{tour.saving}</div>
        </div>
        <div>
          <div>From</div>
          <div>€ {tour.price}</div>
        </div>
      </div>
      <div>
        {tour.length} days
      </div>
    </div>
  );
}

export default TourPriceAndLength;