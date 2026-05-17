import "./Discover.css";

function Discover() {
  return (
    <section className="discover">
      <div className="discover-center">
        <div>
            <p>Season essentials</p>
        </div>
        <div>
            <h1>THIS SEASON'S NON-</h1>
            <h1>NEGOTIABLES</h1>
        </div>
        <div>
            <p>Gear that delivers uncompromised performance,comfort,</p>
            <p>and control no matter the mountain</p>
        </div>
        <a href="#">
        <div className="discover-btn">
            <p>Discover More</p>
            <p id="arrow">⬈</p>
        </div>
        </a>
      </div>
    </section>
  );
}

export default Discover;