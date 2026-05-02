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
    </>

)
}
export default Store_Section