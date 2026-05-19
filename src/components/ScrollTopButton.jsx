import { useEffect, useState } from "react";
import "./ScrollTopButton.css";

function ScrollTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const home = document.getElementById("home");
      if (!home) return;

      const homeBottom = home.offsetTop + home.offsetHeight;

      setIsVisible(window.scrollY > homeBottom - 120);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      type="button"
      className="scrollTopButton"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Наверх"
    >
      ↑
    </button>
  );
}

export default ScrollTopButton;