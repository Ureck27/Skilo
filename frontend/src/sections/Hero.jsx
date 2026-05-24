import Header from './Header';
import temperature from '../assets/temperature.png' 
import "./Hero.css"

function Hero() {
  return (
    <>
    <section className="hero">
    <Header />
    <div>
        <div className="SnowMeetsStyle">
            <img src={temperature} alt="Temperature" />
            <p>Snow meets style</p>
        </div>
        
    </div>
    </section>
    </>
  );
}

export default Hero;