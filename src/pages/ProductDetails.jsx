import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { addToCart, removeCart } from "../Redux/CartSlice";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.fruitApi.item?.record || []);
  const cartData = useSelector((state) => state.cart?.item || []);

  const item = products.find((f) => f.id === Number(id));

  const isInCart = cartData.find((cart) => cart.id === item?.id);

  if (!item) {
    return (
      <div className="h-screen bg-zinc-900 text-white p-10">Loading...</div>
    );
  }

  const marginPrice = item.price_inr;
  const discoutRate = item.discount || 0;
  const sellingPrice = marginPrice - (marginPrice * discoutRate) / 100;

  return (
    <div className="min-h-screen bg-zinc-900 p-8 text-white">
      <button
        onClick={() => navigate(-1)}
        className="mb-5 text-zinc-400 cursor-pointer"
      >
        ← Back
      </button>

      <div className="flex flex-col md:flex-row gap-10 bg-zinc-800 p-6 rounded-2xl border border-white/10">
        <div className="w-full md:w-1/2 bg-white rounded-2xl p-5 flex justify-center">
          <img src={item.img} alt="" className="h-64 md:h-80 object-contain" />
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-3">
          <h1 className="text-3xl font-bold">{item.name}</h1>
          <p className="text-yellow-500">{item.rating}</p>

          <div className="flex items-center gap-4 mt-2">
            <span className="text-2xl font-bold text-green-500">
              ₹{Math.round(sellingPrice)}
            </span>
            <span className="text-zinc-500 line-through">₹{marginPrice}</span>
            <span className="text-blue-400 animate-pulse font-bold">{discoutRate}% OFF</span>
          </div>

          <div className="mt-4 p-4 bg-zinc-900/50 rounded-xl border border-white/5">
            <h4 className="text-orange-500 font-bold">Benefits:</h4>
            <p className="text-zinc-400 text-sm">{item.benefits}</p>
          </div>

          <div className="flex gap-5 mt-4">
            <div className="text-xs text-zinc-500">
              Season: <b className="text-white">{item.season}</b>
            </div>
            <div className="text-xs text-zinc-500">
              Calories: <b className="text-white">{item.calories}</b>
            </div>
          </div>

          <div className="mt-6">
            {isInCart ? (
              <button
                onClick={() => dispatch(removeCart(item.id))}
                className="w-full md:w-52 py-3 bg-red-700 hover:bg-red-600 text-white rounded-lg font-bold cursor-pointer active:scale-95"
              >
                Remove From Cart
              </button>
            ) : (
              <button
                onClick={() => dispatch(addToCart(item))}
                className="w-full md:w-52 py-3 bg-green-700 hover:bg-green-600 text-white rounded-lg font-bold cursor-pointer active:scale-95"
              >
                Add To Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
