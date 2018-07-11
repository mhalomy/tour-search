import React from 'react';

const Search = (props) => {
  const {onChange, placeholder, value} = props;
  return (
    <div>
      <input onChange={onChange} placeholder={placeholder} value={value} />
    </div>
  );
}

export default Search;