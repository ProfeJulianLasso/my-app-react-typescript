import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = (): null => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("ScrollToTop");
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
