import "./Card_Store.css";

function Card_Store({ name, price, image }) {
    return (
        <>
            <div className="card">
                <img src={image} alt={name} className="card-image" />
                <div className="card-content">
                    <div className="card-category-id">
                        <p className="card-category">SKI POLE</p>
                        <p className="id-product">123456789</p>
                    </div>
                    <div className="card-title-product">
                        <h3 className="card-title">{name}</h3>
                        <div className="color-options">
                            <div className="color-options-one"></div>
                            <div className="color-options-two"></div>
                        </div>
                    </div>
                    <div className="card-details">
                        <p>${price}</p>
                        <p>ADD TO CART</p>
                        <p>⮕</p>
                    </div>
                </div>
            </div>
        </>
    )}

export default Card_Store