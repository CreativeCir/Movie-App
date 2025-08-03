import React from 'react';

const Filter = ({ filterTitle, setFilterTitle, filterRating, setFilterRating }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={filterTitle}
        onChange={(e) => setFilterTitle(e.target.value)}
      />
      <div className="rating-filter">
        <span>Minimum rating: </span>
        <input
          type="number"
          min="0"
          max="10"
          value={filterRating}
          onChange={(e) => setFilterRating(Number(e.target.value))}
        />
      </div>
    </div>
  );
};

export default Filter;