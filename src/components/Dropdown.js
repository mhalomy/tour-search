import React from 'react';

const Dropdown = (props) => {
  const {onChange, value} = props;
  return (
    <div style={styles.wrapper}>
      <label>Sort by <select style={styles.selectStyle} onChange={onChange} value={value} >
        <option value="lowestPrice">Lowest price first</option>
        <option value="highestPrice">Highest price first</option>
        <option value="longestTour">Longest tour first</option>
        <option value="shortestTour">Shortest tour first</option>
      </select></label>
    </div>
    );
}

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    margin: '10px',
  },
  selectStyle: {
    padding: '10px',
  }
}

export default Dropdown;