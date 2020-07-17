import React from "react";

import "./search-box.styles.css";

const SearchBox = ({ handleChange, type, placeholder }) => {
  return (
    <div className="search-box">
      <div className="search">
        <input
          className="search-input"
          type={type}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SearchBox;
