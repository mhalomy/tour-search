import React from 'react';

const Search = (props) => {
  const {onChange, placeholder, value, onKeyPress} = props;
  return (
    <div>
      <input
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        onKeyPress={onKeyPress} />
    </div>
  );
}

export default Search;