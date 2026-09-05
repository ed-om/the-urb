import { restaurant } from "../data/restaurant";

function Visit() {
  return (
    <section className="visit" id="visit">
      <div className="visit-topline">
        <span>06</span>
        <span>FIND THE URB</span>
      </div>

      <div className="visit-heading">
        <p className="section-label">Your next stop</p>

        <h2>
          FIND
          <br />
          <span>THE URB.</span>
        </h2>
      </div>

      <div className="visit-layout">
        <div className="visit-details">
          <div className="visit-detail">
            <span>Location</span>
            <p>{restaurant.location}</p>
          </div>

          <div className="visit-detail">
            <span>Opening hours</span>
            <p>{restaurant.hours}</p>
          </div>

          <div className="visit-detail">
            <span>Phone</span>
            <a href={`tel:${restaurant.phone}`}>
              {restaurant.phone}
            </a>
          </div>

          <div className="visit-actions">
            <a
              href={restaurant.deliveryLink}
              target="_blank"
              rel="noreferrer"
              className="visit-button"
            >
              Order delivery ↗
            </a>

            <a
              href={restaurant.instagram}
              target="_blank"
              rel="noreferrer"
              className="visit-button visit-button-outline"
            >
              Instagram ↗
            </a>

            <a
              href={restaurant.tiktok}
              target="_blank"
              rel="noreferrer"
              className="visit-button visit-button-outline"
            >
              TikTok ↗
            </a>
          </div>
        </div>

        <div className="visit-map">
  <div className="visit-map-grid" />

  

  <div className="visit-map-pin">
    <span />
  </div>

  <iframe
    title="The Urb location"
    src={restaurant.mapEmbed}
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
      </div>
    </section>
  );
}

export default Visit;