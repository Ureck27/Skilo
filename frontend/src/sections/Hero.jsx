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
    </div>
    </section>
    </>
  );
}

export default Hero;