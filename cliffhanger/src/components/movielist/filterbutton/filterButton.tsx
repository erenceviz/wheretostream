// FilterButton.tsx

import React from "react";
import PropTypes from "prop-types";

const FilterButton = ({ label, options, onSelect }) => {
  return (
    <div>
      <label>{label}:</label>
      <select onChange={(e) => onSelect(e.target.value)}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

FilterButton.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default FilterButton;
