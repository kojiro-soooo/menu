import { useEffect } from "react";

const useScrollToTop = () => {
  // scroll to top on first render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};

export default useScrollToTop;