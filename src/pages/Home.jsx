import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchFruit } from "../Redux/ApiFruitSlice";
import { useDispatch, useSelector } from "react-redux";

import banner from "../img/fruit.png";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFruit());
  }, [dispatch]);

  const { item } = useSelector((state) => state.fruitApi);
  const fruitsData = item?.record || [];
  const bestSellers = fruitsData.filter(
    (fruit) => fruit.is_best_seller === true
  );

  return (
    <div className="w-full min-h-screen bg-zinc-900">
      <div className="relative w-full h-[100vh] overflow-hidden">
        <img
          className="w-full h-full object-cover object-center md:object-[90%_center]"
          src={banner}
          alt="home-bag"
        />
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="absolute inset-0 flex items-center justify-center md:justify-end px-6 md:px-20">
          <div className="w-full max-w-[320px] md:max-w-sm backdrop-blur-md bg-white/10 border border-white/20 text-white p-6 md:p-8 rounded-2xl text-center md:text-left shadow-2xl">
            <h2 className="text-[1.2em] font-medium text-blue-200">
              Welcome to our Super-Mart
            </h2>
            <h1 className="text-[1.8em] font-bold mt-2 leading-tight">
              Get Fresh <span className="text-orange-700">Fruits</span>
            </h1>
            <p className="text-[1em] mt-3 opacity-90 font-light">
              Upto{" "}
              <span className="font-bold animate-pulse underline text-white">
                30% off*
              </span>
            </p>
            <button
              onClick={() => navigate("/products")}
              className="mt-6 w-full md:w-auto px-8 py-3 bg-green-600 hover:bg-green-500 transition-all rounded-full font-bold cursor-pointer"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <div className="p-8">
        <h2 className="text-white text-2xl font-bold mb-6">Best Sellers 🔥</h2>

        <div className="flex overflow-x-auto gap-6 pb-10">
          {bestSellers.map((item) => {
            const marginPrice = item.price_inr;
            const discoutRate = item.discount || 0;
            const sellingPrice =
              marginPrice - (marginPrice * discoutRate) / 100;

            return (
              <div
                key={item.id}
                className="min-w-[200px] bg-zinc-800 border border-white/10 p-4 rounded-2xl relative"
              >
                <div className="w-24 h-10  border border-white/20 backdrop-blur-md bg-white/5 absolute top-2 right-2 rounded-lg flex items-center justify-center text-xs font-bold text-orange-400">
                  <span className="animate-pulse">{discoutRate}% OFF</span>
                </div>

                <div className="h-32 w-full bg-white rounded-xl mb-4 overflow-hidden">
                  <img
                    src={item.img}
                    className="w-full h-full object-contain p-2"
                    alt=""
                  />
                </div>

                <h3 className="text-white font-bold truncate">{item.name}</h3>
                <p className="text-green-500 font-bold mt-1">
                  ₹{Math.round(sellingPrice)}
                </p>
                <p className="text-zinc-500 text-xs line-through">
                  ₹{marginPrice}
                </p>

                <button
                  onClick={() => navigate(`/products/${item.id}`)}
                  className="mt-4 w-full bg-zinc-700 text-white py-2 rounded-lg text-xs hover:bg-zinc-600"
                >
                  View Details
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
