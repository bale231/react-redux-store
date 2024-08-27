import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productsSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { setPage } from "../features/global/globalSlices";

function Card3({
  itemId,
  heading,
  description,
  thumbnailSrc,
  thumbnailAlt = "Thumbnail",
  price,
  className,
}) {
  const trimmedHeading =
    heading.length > 40 ? `${heading.substring(0, 40)}...` : heading;
  const dispatch = useDispatch();

  return (
    <div
      className={`rounded-lg p-6 relative h-[400px] md:h-[500px] shadow-sm overflow-hidden ${className}`}
    >
      <div className="overflow-hidden h-[200px] rounded-lg">
        <Link to={`/product/${itemId}`}>
          <img
            className="w-full h-full object-cover cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg"
            src={thumbnailSrc}
            alt={thumbnailAlt}
          />
        </Link>
      </div>
      <h3 className=" text-justify text-[16px] font-bold text-gray-600 block">
        {trimmedHeading}
      </h3>
      <div className="p-3 overflow-hidden">
        <p className="font-bold text-gray-600 mt-3">{price}</p>
      </div>
      <div className="md:flex md:flex-col md:justify-center md:items-center items-end mt-5 p-4 gap-3 flex justify-between md:p-3 absolute bottom-0 md:left-[17%] left-[10%]">
        <div>
          <button className="text-[#222222] border-2 border-[#222222] px-3 py-2 rounded font-bold active:bg-[#222222] active:text-white">
            Add to cart
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              dispatch(setPage("product"));
            }}
            className="text-[#222222] border-2 border-[#222222] px-3 py-2 rounded font-bold  active:bg-[#222222] active:text-white"
          >
            <Link to={`/product/${itemId}`}>View Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
function Store() {
  const { products, status, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <div className="overflow-y-auto mb-[20%] mt-[20%] grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-3 sm:p-8">
        {products &&
          products.map((item) => (
            <Card3
              key={item.id}
              itemId={item.id}
              className="bg-[#fcf4ff] cursor-pointer"
              heading={item.title}
              description={item.description}
              thumbnailSrc={item.image}
              price={`$ ${item.price}`}
            >
              <Link to={`/product/${item.id}`}>View Details</Link>
            </Card3>
          ))}
      </div>
    </>
  );
}

export default Store;
