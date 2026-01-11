import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

function ScrollTop() {
  const { pathname } = useLocation();
  const navType = useNavigationType(); // PUSH ya POP

  useEffect(() => {
    if (navType === "PUSH") {
      window.scrollTo(0, 0);
    }
  }, [pathname, navType]);

  return null;
}

export default ScrollTop;
