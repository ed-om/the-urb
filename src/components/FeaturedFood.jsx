import { restaurant } from "../data/restaurant";

function FeaturedFood() {
  const food = restaurant.featuredFood;

  return (
    <section className="food-scene" id="featured">
      <div className="food-scene-inner">
        <div className="food-scene-number">02</div>

        <div className="food-scene-heading">
          <p className="section-label">The first bite</p>

          <h2>
            CRISPY.
            <br />
            <span>JUICY.</span>
          </h2>
        </div>

        <div className="food-scene-image">
          <div className="food-scene-circle" />

          <img src={food.image} alt={food.name} />
        </div>

        <div className="food-scene-description">
          <p>{food.description}</p>

          <a href="#menu" className="scene-link">
            Explore the menu <span>↗</span>
          </a>
        </div>

        <div className="food-scene-caption">
          <span>MADE FOR MESSY HANDS</span>
          <span>02 / 08</span>
        </div>
      </div>
    </section>
  );
}

export default FeaturedFood;