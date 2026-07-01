import React from "react";

const SearchBar = () => {
  return (
    <div className="p-2 flex flex-1 ">
      <input
        type="text"
        placeholder="🔍 Search jobs..."
        className="px-4 py-3 w-full rounded-2xl"
      />

      <button className="text-blue-600">
        Search
      </button>
    </div>
  );
};

export default SearchBar;