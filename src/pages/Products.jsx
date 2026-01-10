import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFruit } from "../Redux/ApiFruitSlice";
import { addToCart, removeCart } from "../Redux/CartSlice";
import { useNavigate } from "react-router-dom";

function Products() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchFruit());
  }, [dispatch]);

  const { item, loading, error } = useSelector((state) => state.fruitApi);
  const cartData = useSelector((state) => state.cart?.item || []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl font-bold text-green-700">
        Loading Fresh Fruits... 🍎
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center mt-10 font-bold">
        Error: {error}
      </div>
    );
  }

  const fruitsData = item?.record || [];
  console.log(fruitsData);

  return (
    <div className=" p-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {fruitsData.map((item) => {
          const isInCart = cartData.find((cart) => cart.id === item.id);
          const marginPrice = item.price_inr;
          const discoutRate = item.discount || 0;
          const sellingPrice = marginPrice - (marginPrice * discoutRate) / 100;

          return (
            <div
              onClick={() => navigate(`/products/${item.id}`)}
              key={item.id}
              className="group  bg-zinc-100 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col rounded-2xl overflow-hidden"
            >
              <div className="relative overflow-hidden bg-gray-50 aspect-square">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex justify-center items-center gap-1 mt-2">
                <span className="text-gray-600 font-bold text-xs">
                  {item.rating}
                </span>
                <span className="text-gray-400 text-[10px] font-normal">
                  (100+)
                </span>
              </div>

              <div className="p-4 flex flex-col flex-grow text-center">
                <h3 className="font-bold text-gray-800 text-sm mb-1 truncate">
                  {item.name}
                </h3>

                <div className="flex flex-col items-center gap-0.5 mb-4">
                  <span className="text-green-600 font-extrabold text-lg">
                    ₹{Math.round(sellingPrice)}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 text-md line-through">
                      ₹{marginPrice}
                    </span>
                    <span className="text-blue-600 text-xs font-bold">
                      {discoutRate}% OFF
                    </span>
                  </div>
                </div>

                <div className="mt-auto">
                  {isInCart ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        dispatch(removeCart(item.id));
                      }}
                      className="w-full cursor-pointer py-2 bg-red-50 text-red-600 border border-red-200 text-xs font-bold rounded-xl hover:bg-red-600 hover:text-white transition-all active:scale-95"
                    >
                      REMOVE
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        dispatch(addToCart(item));
                      }}
                      className="w-full cursor-pointer py-2 bg-green-600 text-white text-xs font-bold rounded-xl hover:bg-green-700 shadow-md shadow-green-100 transition-all active:scale-95"
                    >
                      ADD TO CART
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
