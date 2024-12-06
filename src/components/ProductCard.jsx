const ProductCard = ({ product }) => {
  return (
    <div
      id="prod-box"
      className="relative border shadow-lg text-center md:w-[230px] lg:w-[210px] h-[300px] p-4 "
    >
      <img
        src={`${product.image}`}
        alt={product.name}
        className="w-full lg:h-40 h-48 object-cover mb-2"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-500">
        {product.originalPrice && (
          <span className="line-through mr-2 text-green-500">
            £{product.originalPrice}
          </span>
        )}
        <span className="text-green-500">From £{product.price.toFixed(2)}</span>
      </p>
      {product.onSale && (
        <div className="absolute w-24 bg-gray-300 text-black py-1 top-0 left-0">
          On Sale!
        </div>
      )}
      {product.bestseller && (
        <span className=" absolute w-24 bg-gray-300 text-black py-1 top-0 left-0">
          Bestseller
        </span>
      )}
    </div>
  );
};

export default ProductCard;
