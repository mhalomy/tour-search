import React from 'react';

const Search = (props) => {
  const {onChange, placeholder, value, onKeyPress} = props;
  return (
    <div style={styles.wrapper} >
      <input
        style={styles.inputStyle}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        onKeyPress={onKeyPress} />
    </div>
  );
}

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    margin: '10px',
  },
  inputStyle: {
    padding: '10px',
  }
}

export default Search;