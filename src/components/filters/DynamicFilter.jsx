// DynamicFilter.jsx
import React, { useState } from "react";

const DynamicFilter = ({ filtersConfig, onApply }) => {
  const [filterState, setFilterState] = useState({});

  const handleChange = (key, value, type) => {
    setFilterState((prev) => {
      if (type === "checkbox") {
        const current = prev[key] || [];
        return {
          ...prev,
          [key]: current.includes(value)
            ? current.filter((v) => v !== value)
            : [...current, value],
        };
      }
      if (type === "range") {
        return { ...prev, [key]: value };
      }
      if (type === "select") {
        return { ...prev, [key]: value };
      }
    });
  };

  const handleApply = () => {
    onApply(filterState);
  };

  const handleClear = () => {
    setFilterState({});
    onApply({});
  };

  return (
    <div className="w-full md:w-64 bg-gray-100 p-4 rounded">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>

      {filtersConfig.map((filter) => (
        <div className="mb-4" key={filter.key}>
          <h3 className="font-medium mb-1">{filter.label}</h3>

          {filter.type === "checkbox" &&
            filter.options.map((opt) => (
              <label key={opt} className="block">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={(filterState[filter.key] || []).includes(opt)}
                  onChange={() => handleChange(filter.key, opt, "checkbox")}
                />
                {opt}
              </label>
            ))}

          {filter.type === "range" && (
            <>
              <input
                type="range"
                min={filter.min}
                max={filter.max}
                value={filterState[filter.key] || filter.max}
                onChange={(e) =>
                  handleChange(filter.key, parseInt(e.target.value), "range")
                }
                className="w-full"
              />
              <div className="text-sm flex justify-between">
                <span>{filter.min}</span>
                <span>{filterState[filter.key] || filter.max}</span>
              </div>
            </>
          )}

          {filter.type === "select" && (
            <select
              className="w-full border p-1 rounded"
              value={filterState[filter.key] || ""}
              onChange={(e) => handleChange(filter.key, e.target.value, "select")}
            >
              <option value="">-- Select --</option>
              {filter.options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          )}
        </div>
      ))}

      <div className="flex gap-2 mt-4">
        <button onClick={handleApply} className="bg-purple-600 text-white px-4 py-2 rounded">
          Apply
        </button>
        <button onClick={handleClear} className="text-purple-600 border px-4 py-2 rounded">
          Clear
        </button>
      </div>
    </div>
  );
};

export default DynamicFilter;
