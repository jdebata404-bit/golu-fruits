import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-rose-900 text-zinc-300 py-12 px-4">
      <div className="max-w-5xl md:divide-x divide-yellow-500 mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col items-center text-center gap-3">
          <h1 className="text-white text-xl font-bold border-b-2 border-green-600 pb-1">
            Address
          </h1>
          <p className="max-w-[200px]">
            Rasulgarh, Bhubaneswar, 751010, Odisha
          </p>
        </div>

        <div className="flex flex-col items-center text-center gap-4">
          <h1 className="text-white text-xl font-bold border-b-2 border-green-600 pb-1">
            Subscribe Us
          </h1>
          <div className="w-full max-w-[250px] items-center flex flex-col gap-2">
            <input
              className="bg-zinc-800 border border-zinc-700 p-2 rounded text-sm outline-none focus:border-green-500"
              type="email"
              placeholder="Enter your E-mail"
            />
            <button className="bg-green-700 w-17 active:scale-90 hover:bg-green-600 text-white py-2 rounded font-bold transition-all cursor-pointer">
              Submit
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center text-center gap-3">
          <h1 className="text-white text-xl font-bold border-b-2 border-green-600 pb-1">
            News
          </h1>
          <ul className="space-y-1">
            <li className="hover:text-green-500 cursor-pointer">
              Organic Farming
            </li>
            <li className="hover:text-green-500 cursor-pointer">
              New Store Opening
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
