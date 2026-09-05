import { restaurant } from "../data/restaurant";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-background-word">URB</div>

      <div className="hero-top">
  <a href="#home" className="hero-logo">
    <img
      src="/public/logo.jpg"
      alt="The Urb"
    />
  </a>

  <span>BOLE · ADDIS ABABA</span>
</div>

      <div className="hero-center">
        <p className="hero-kicker">Urban taste, elevated.</p>

        <h1>
          THE
          <br />
          <span>URB.</span>
        </h1>

        <div className="hero-food">
          <img
            src={restaurant.heroImage}
            alt="The Urb restaurant"
          />
        </div>
      </div>

      <div className="hero-bottom">
        <span>WINGS · BURGERS · TENDERS</span>

        <a href="#intro" className="hero-scroll">
          Scroll to explore
          <span>↓</span>
        </a>

        <span>01 / 08</span>
      </div>
    </section>
  );
}

export default Hero;