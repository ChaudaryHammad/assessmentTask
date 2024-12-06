import React from "react";

const SearchBar = ({ onSearch }) => {
  return (
    <div>
      <div className="relative">
        <input
          placeholder="Search for products"
          className="input  border-b-2 border-black placeholder:text-black px-5 py-3 text-black  transition-all w-full  outline-none"
          name="search"
          onChange={(e) => onSearch(e.target.value)}
        />
        <svg
          className="size-6 absolute top-3 right-3 text-black"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
