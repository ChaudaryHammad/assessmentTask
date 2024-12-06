import React, { useState } from "react";

const CategoryFilter = ({ categories, onFilter }) => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    onFilter(category);
  };

  return (
    <div className="">
      <h4 className="text-2xl font-bold mb-4">Categories</h4>
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li
            key={index}
            className={`cursor-pointer py-3 ${
              activeCategory === category ? "text-green-500 font-semibold" : ""
            } hover:text-green-500`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
