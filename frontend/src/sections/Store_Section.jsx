import Card_Store from "../components/Card_Store";
import Navbtn from "../components/Navbtn";
import NavBtnOne from "../components/Navbtnone";
import "./Store_Section.css"

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
    <Card_Store name="SKI POLE" price="100" image="https://cdn.shopify.com/s/files/1/0283/0185/2747/products/2024-Atomic-Ski-Poles-Red-Black-1_600x.jpg?v=1700864418" />
    </>

)
}
export default Store_Section