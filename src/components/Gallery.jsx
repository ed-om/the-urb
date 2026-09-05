import { restaurant } from "../data/restaurant";

function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-header">
        <div>
          <span className="section-label">05 / Inside the mood</span>

          <h2>
            SEE
            <br />
            YOU
            <br />
            <span>THERE.</span>
          </h2>
        </div>

        <p>
          Good food.
          <br />
          Good people.
          <br />
          Good energy.
        </p>
      </div>

      <div className="gallery-track">
        {restaurant.gallery.map((image, index) => (
          <div className="gallery-card" key={image}>
            <img
              src={image}
              alt={`The Urb atmosphere ${index + 1}`}
            />

            <span>
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        ))}
      </div>

      <div className="gallery-footer">
        <span>THE URB · BOLE</span>
        <span>06 / 08</span>
      </div>
    </section>
  );
}

export default Gallery;