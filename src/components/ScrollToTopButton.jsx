import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = window.scrollY; 
    const screenHeight = window.innerHeight; 
    setVisible(scrolled > screenHeight); 
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#1a1a1a",
        color: "#d8b265",
        border: "none",
        borderRadius: "50%",
        padding: "10px 15px",
        cursor: "pointer",
        display: visible ? "inline" : "none",
        boxShadow: "0 2px 10px rgba(255, 255, 255, 0.2)",
        zIndex: 1000,
      }}
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
};

export default ScrollToTopButton;
