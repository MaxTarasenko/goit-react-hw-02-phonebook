import PropTypes from 'prop-types';
import React from 'react';
import style from './filter.module.css';

const Filter = ({ filter, handleChange }) => {
  return (
    <div className={style.blockFilter}>
      <span className={style.label}>Find contacts by name</span>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
        className={style.inputFilter}
      ></input>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default Filter;
