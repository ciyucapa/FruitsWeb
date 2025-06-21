import React from "react";
import "./index.css"

type FilterType = 'family' | 'order' | 'genus';

type Props = {
  filterType: FilterType;
  filterValue: string;
  sortOrder: 'asc' | 'desc';
  onFilterTypeChange: (type: FilterType) => void;
  onFilterValueChange: (value: string) => void;
  onToggleSortOrder: () => void;
};

const FilterAndSortedFruits: React.FC<Props> = ({
  filterType,
  filterValue,
  sortOrder,
  onFilterTypeChange,
  onFilterValueChange,
  onToggleSortOrder,
}) => {
  return (
    <div className="d-flex align-items-center gap-3 flex-wrap justify-content-end filter-bar ">
      <select
        className="form-select select-rounded"
        value={filterType}
        onChange={(e) => onFilterTypeChange(e.target.value as FilterType)}
      >
        <option value="family">Family</option>
        <option value="order">Order</option>
        <option value="genus">Genus</option>
      </select>

      <div className="input-rounded">
        <input
          type="text"
          className="form-control border-0"
          placeholder={`Search by ${filterType}`}
          value={filterValue}
          onChange={(e) => onFilterValueChange(e.target.value)}
        />
        <span className="input-group-text border-0">
          <i className="bi bi-search"></i>
        </span>
      </div>

      <button className="btn btn-outline-secondary custom-order-btn" onClick={onToggleSortOrder}>
        Order {sortOrder === 'asc' ? 'A - Z' : 'Z - A'}
      </button>
    </div>
  );
};

export default FilterAndSortedFruits;
