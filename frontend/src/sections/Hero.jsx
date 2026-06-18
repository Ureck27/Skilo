import Header from './Header';
import temperature from '../assets/temperature.png' 
import "./Hero.css"

function Hero() {
  return (
    <>
    <section className="hero">
    <Header />
    <div className="hero-center">
            <div className="SnowMeetsStyle">
                <img src={temperature} alt="Temperature" />
                <p>Snow meets style</p>
            </div>
            <div className="hero-title">
                <h1>PERFECT SNOW</h1>
                <h1>ESCAPE</h1>
            </div>
            <div className="hero-subtitle">
              <p>Snow meets style and every moment</p>
              <p>sparkles with adventure</p>
            </div>
            <div className="hero-button">
                <a href="#" className="hero-button-link">Get Passes</a>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1da0fa" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
            </div>

    </div>
    </section>
    </>
  );
}

export default Hero;