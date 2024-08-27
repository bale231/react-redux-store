import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchProductById,
  resetProductStatus,
} from "../features/product/singleProductSlices";

function ProductDetails() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { product, status, error } = useSelector((state) => {
    return state.product;
  });

  useEffect(() => {
    dispatch(resetProductStatus());
  }, [dispatch]);

  useEffect(() => {
    if (status === "idle") {
      console.log(status);
      dispatch(fetchProductById(productId));
    }
  }, [dispatch, status, productId]);

  if (status === "loading") {
    console.log(status);
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    console.log(status);
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-4 mt-9 bg-white text-[#222222] pt-[10%] h-full ">
      {product ? (
        <>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[300px] object-cover"
          />
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <p>{product.description}</p>
          <p className="text-xl font-semibold">$ {product.price}</p>
          <div>
            <button className="text-[#222222] border-2 border-[#222222] px-3 py-2 rounded font-bold mt-3 active:bg-[#222222] active:text-white">
              Add to cart
            </button>
          </div>
        </>
      ) : (
        <div>Product not found</div>
      )}
    </div>
  );
}

export default ProductDetails;
