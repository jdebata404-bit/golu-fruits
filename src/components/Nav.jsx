// import React from "react";
// import { NavLink } from "react-router-dom";
// import { BsCartFill } from "react-icons/bs";
// import { useSelector } from "react-redux";

// function Nav() {
//   const cartData = useSelector((state) => state.cart.item);
//   // console.log(cartData);

//   const navClass = ({ isActive }) =>
//     isActive
//       ? "text-orange-300 pb-1 border-b-2 border-red-500"
//       : "text-zinc-300";

//   return (
//     <nav
//       className="h-12 w-full bg-[oklch(33.2%_0.095_166.913)]
//  flex flex-col md:flex-row items-center justify-around rounded-lg "
//     >
//       <NavLink className="font-bold monoton text-rose-300 text-lg" to="/">
//         Golu-Grocer
//       </NavLink>
//       <div className="flex gap-4 saira text-yellow-500">
//         <NavLink to="/" className={navClass}>
//           Home
//         </NavLink>
//         <NavLink className={navClass} to="/products">
//           Products
//         </NavLink>
//         <NavLink className={navClass} to="/support">
//           Support
//         </NavLink>
//       </div>
//       <NavLink to="/cart" className="relative text-yellow-600">
//         <BsCartFill className="text-xl " />
//         <h4 className="absolute -top-3 -right-1 rounded-full border-2 border-slate-600 text-blue-100">
//           {cartData.length}
//         </h4>
//       </NavLink>
//     </nav>
//   );
// }

// export default Nav;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";

function Nav() {
  const [menu, setMenu] = useState(false);
  const cartData = useSelector((state) => state.cart.item);

  const navClass = ({ isActive }) =>
    isActive ? "text-orange-300 border-b-2 border-red-500" : "text-zinc-300";

  return (
    <nav className="bg-[oklch(33.2%_0.095_166.913)] p-4 w-full text-white">
      <div className="flex  justify-between items-center">
        <NavLink className=" font-bold monoton text-rose-300 text-lg" to="/">
          Golu-FRUITS
        </NavLink>

        <div className="flex  items-center gap-4">
          <NavLink to="/cart" className="relative">
            <BsCartFill className="text-xl text-yellow-500" />
            <span className="absolute -top-2 -right-2 bg-red-600 px-1 rounded-full text-xs">
              {cartData.length}
            </span>
          </NavLink>

          <button
            className="text-2xl active:scale-110 cursor-pointer md:hidden"
            onClick={() => setMenu(!menu)}
          >
            ☰
          </button>
        </div>
      </div>

      {menu && (
        <div className="flex flex-col gap-4 mt-4 items-center md:hidden">
          <NavLink to="/" onClick={() => setMenu(false)} className={navClass}>
            Home
          </NavLink>
          <NavLink
            to="/products"
            onClick={() => setMenu(false)}
            className={navClass}
          >
            Fruits
          </NavLink>
          <NavLink
            to="/support"
            onClick={() => setMenu(false)}
            className={navClass}
          >
            Support
          </NavLink>
        </div>
      )}

      <div className="hidden md:flex justify-center gap-10 -mt-6">
        <NavLink to="/" className={navClass}>
          Home
        </NavLink>
        <NavLink to="/products" className={navClass}>
          Fruits
        </NavLink>
        <NavLink to="/support" className={navClass}>
          Support
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;
