import { useEffect, useState } from "react";
import { restaurant } from "../data/restaurant";

function Navbar() {
  const [isHero, setIsHero] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroLimit = window.innerHeight * 0.78;

      const onHero = currentScrollY < heroLimit;

      setIsHero(onHero);

      if (onHero) {
        setIsVisible(true);
        setMenuOpen(false);
      } else {
        if (currentScrollY > lastScrollY && currentScrollY > 120) {
          setIsVisible(false);
          setMenuOpen(false);
        } else if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`navbar
          ${isHero ? "navbar-hero" : "navbar-compact"}
          ${isVisible ? "navbar-visible" : "navbar-hidden"}
        `}
      >
        <a href="#home" className="logo" onClick={closeMenu}>
          {restaurant.name}
        </a>

        <nav className="nav-links">
          <a href="#menu" onClick={closeMenu}>
            Menu
          </a>

          <a href="#intro" onClick={closeMenu}>
            About
          </a>

          <a href="#visit" onClick={closeMenu}>
            Visit
          </a>
        </nav>

        <a
          href={restaurant.deliveryLink}
          target="_blank"
          rel="noreferrer"
          className="nav-button"
        >
          Order
        </a>

        {!isHero && (
          <button
            className={`menu-toggle ${
              menuOpen ? "menu-toggle-open" : ""
            }`}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
          </button>
        )}
      </header>

      <div className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}>
        <div className="mobile-menu-top">
          <span>THE URB</span>
          <span>BOLE · ADDIS ABABA</span>
        </div>

        <nav className="mobile-menu-links">
          <a href="#menu" onClick={closeMenu}>
            <span>01</span>
            Menu
          </a>

          <a href="#intro" onClick={closeMenu}>
            <span>02</span>
            About
          </a>

          <a href="#visit" onClick={closeMenu}>
            <span>03</span>
            Visit
          </a>
          <a href={restaurant.deliveryLink} onClick={closeMenu}>
            <span>03</span>
            Delivery
          </a>
        </nav>
        

        <div className="mobile-menu-bottom">
          <span>Urban taste, elevated.</span>
        </div>
      </div>
    </>
  );
}

export default Navbar;