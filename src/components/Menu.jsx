import { restaurant } from "../data/restaurant";

function Menu() {
  return (
    <section className="menu-section" id="menu">
      <div className="menu-intro">
        <span className="section-label">03 / The menu</span>

        <h2>
          PICK
          <br />
          YOUR
          <br />
          <span>MOOD.</span>
        </h2>

        <p>
          Big flavor. Simple choices.
          <br />
          Nothing boring.
        </p>
      </div>

      <div className="menu-scenes">
        {restaurant.menu.map((item, index) => (
          <article className="menu-scene" key={item.id}>
            <div className="menu-scene-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="menu-scene-image">
              <img src={item.image} alt={item.name} />
            </div>

            <div className="menu-scene-info">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>

            <span className="menu-scene-arrow">↗</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Menu;