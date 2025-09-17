import React, { useEffect } from "react";

const ScrollToTop = () => {
  const location = window.location;

  useEffect(() => {
    if (window.screenY >= 0) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location]);
  return <></>;
};

export default ScrollToTop;
