import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { incQuantity, removeCart, decQuantity } from "../Redux/CartSlice";
import { useNavigate } from "react-router-dom";

function Carts() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const cartItem = cart?.item || [];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const grandTotal = cartItem.reduce((total, item) => {
    const discount = item.discount || 0;
    const sellingPrice = item.price_inr - (item.price_inr * discount) / 100;

    return total + item.quantity * sellingPrice;
  }, 0);


const totalQuantity = cartItem.reduce((sum, item) => sum + item.quantity, 0);

  // const cartData = useSelector((state) => state.cart?.item);
  return (
    <div className="md:min-h-screen h-full w-full bg-slate-800 p-8">
      {cartItem.length === 0 ? (
        <>
          <div className="flex flex-col items-center justify-center gap-6 mt-20 p-10 bg-red-900 rounded-lg">
            <h1 className="text-3xl font-bold text-white">No Items in Cart</h1>
            <p className="text-slate-400">
              Your cart is empty. Start shopping now!
            </p>
            <button
              onClick={() => navigate("/products")}
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-300 active:scale-95"
            >
              Shop Now
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="hidden sm:grid  grid-cols-4 justify-items-center rounded w-full p-2 mb-3 bg-gray-700 text-white font-semibold ">
            <p>PRODUCT</p>
            <p>DETAILS</p>
            <p>QUANTITY</p>
            <p>TOTAL</p>
          </div>

          {cartItem.map((item) => {
            const marginPrice = item.price_inr;
            const discoutRate = item.discount;
            const sellingPrice =
              marginPrice - (marginPrice * discoutRate) / 100;

            return (
              <div
                key={item.id}
                className="grid grid-cols-1 sm:grid-cols-4 hover:border-1 border-yellow-500/30  shadow-sm justify-items-center items-center gap-4 sm:gap-9
             mt-2 p-3 rounded w-full bg-slate-900 "
              >
                <div className="w-22 h-22 bg-white rounded overflow-hidden">
                  <img
                    onClick={() => navigate(`/products/${item.id}`)}
                    className="h-full w-full object-cover"
                    src={item.img}
                    alt=""
                  />
                </div>
                <div className="flex  flex-col items-center">
                  <h2>{item.name}</h2>
                  <button
                    onClick={() => dispatch(removeCart(item.id))}
                    className="text-red-500 p-.5 rounded hover:bg-slate-700 cursor-pointer active:scale-110"
                  >
                    Remove
                  </button>
                </div>
                <div className="flex justify-center hover:border-1 border-blue-500 items-center gap-3 w-19 h-9 rounded-md bg-slate-600">
                  <button
                    onClick={() => dispatch(decQuantity(item.id))}
                    className="cursor-pointer text-red-400 text-xl active:scale-110"
                  >
                    <CiCircleMinus />
                  </button>
                  <p className="text-yellow-300">{item.quantity}</p>
                  <button
                    onClick={() => dispatch(incQuantity(item.id))}
                    className="cursor-pointer text-green-400 text-xl active:scale-110"
                  >
                    <CiCirclePlus />
                  </button>
                </div>
                <div>
                  <h3>
                    ₹ {Math.round(item.quantity * sellingPrice)}
                    {}
                  </h3>
                </div>
              </div>
            );
          })}

          <div className="mt-6 flex flex-col items-end gap-4 p-4 bg-slate-900/50 rounded-lg border border-slate-700">
            <div>
              <span>Total of {totalQuantity} items order!</span>
              <hr />
            </div>
            <div className="flex justify-between w-full sm:w-52 text-white">
              <span className="text-xl">Grand Total:</span>
              <span className="text-2xl font-bold text-yellow-400">
                ₹ {Math.round({grandTotal})}
              </span>
            </div>

            <button className="w-full cursor-pointer sm:w-52 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition duration-300 active:scale-95 shadow-lg shadow-green-900/20">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Carts;
