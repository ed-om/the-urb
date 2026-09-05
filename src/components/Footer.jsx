import { restaurant } from "../data/restaurant";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-topline">
        <span>07</span>
        <span>THE END? NOT REALLY.</span>
      </div>

      <div className="footer-heading">
        <h2>
          SEE YOU
          <br />
          <span>AT THE URB.</span>
        </h2>
      </div>

      <div className="footer-middle">
        <a href="#home" className="footer-logo">
          {restaurant.name}
        </a>

        <div className="footer-links">
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#visit">Visit</a>
          <a
            href={restaurant.instagram}
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>Urban taste, elevated.</span>
        <span>© {new Date().getFullYear()} The Urb</span>
      </div>
    </footer>
  );
}

export default Footer;