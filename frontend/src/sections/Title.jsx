import snowGoggles from "../assets/storeimage/Snow goggles.webp";
import helmet from "../assets/storeimage/helmet two.webp";
import "./Title.css";

function Title() {
    return (
        <section className="title-section">
            <h1 className="title">with <span className="title-image-wrap"><img src={snowGoggles} alt="Snow goggles" className="title-image" /></span> frosten, experience winter</h1>
            <h1 className="title"> performance engineering for stability,</h1>
            <h1 className="title"> responsiveness, <span className="title-image-wrap"><img src={helmet} alt="Helmet" className="title-image" /></span> and confidence</h1>
        </section>
    )
}

export default Title
