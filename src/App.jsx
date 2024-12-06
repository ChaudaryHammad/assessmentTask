import React, { useState } from "react";
import { products } from "./data/products";
import ProductCard from "./components/ProductCard";
import CategoryFilter from "./components/CategoryFilter";
import SearchBar from "./components/SearchBar";

function App() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [categories, setCategories] = useState([
    "All",
    ...new Set(products.map((product) => product.category)),
  ]);

  const filterByCategory = (category) => {
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === category)
      );
    }
  };

  const filterBySearch = (query) => {
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <div className="min-h-screen bg-white p-4 ">
      <div className="flex flex-col gap-x-10 md:flex-row justify-end items-center  mb-6 pb-4  ">
        <div className="w-full lg:w-64 mb-5 lg:mb-0">
          <SearchBar onSearch={filterBySearch} />
        </div>
        <div className="block lg:hidden w-full mb-4 md:mb-0">
          <select
            className="w-full border border-gray-300 rounded-md p-2"
            onChange={(e) => filterByCategory(e.target.value)}
            defaultValue={""}
          >
            <option value="" disabled>
              Select Category
            </option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="hidden lg:block lg:w-1/5 lg:px-4 lg:bg-white">
          <CategoryFilter categories={categories} onFilter={filterByCategory} />
        </div>

        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 lg:gap-x-9 lg:gap-y-6 gap-x-6 gap-y-4 ml-0 lg:ml-5 flex-1">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
