import Card_Store from "../components/Card_Store";
import Navbtn from "../components/Navbtn";
import NavBtnOne from "../components/Navbtnone";
import "./Store_Section.css"
import helmet from "../assets/storeimage/Helmet.jpg";
import boot from "../assets/storeimage/boot.jpg";
import backpack from "../assets/storeimage/backpack.jpg";

function Store_Section() {
  return (
    <>
    <div className="store-header">
        <div className="store-nav">
            <NavBtnOne name="↗" />
            <Navbtn name="SKI POLES" />
            <Navbtn name="SKI BACKPACKS" />
            <br></br>
            <Navbtn name="SKI BAGS" />
            <Navbtn name="SKI BOOTS" />
            <Navbtn name="SKI BAGS" />
        </div>
        <div>
            <h1 className="store-title">TOP SKI ACCESSORIES</h1>
        </div>
    </div>
    <div className="store-cards">
    <Card_Store name="SKI POLE" price="100" image={helmet} category="SKI POLES" id="123456789"/>
    <Card_Store name="SKI POLE" price="100" image={boot} category="SKI POLES" id="123456789"/>
    <Card_Store name="SKI POLE" price="100" image={backpack} category="SKI POLES" id="123456789"/>
    </div>
    </>

)
}
export default Store_Section