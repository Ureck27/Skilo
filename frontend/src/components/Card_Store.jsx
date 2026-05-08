import "./Card_Store.css";


function Card_Store({ name, price, image, category, id, discount }) {
    const numericPrice = Number(price);
    const formattedPrice = Number.isFinite(numericPrice)
        ? `£${numericPrice.toFixed(2)}`
        : `£${price}`;

    return (
        <>
            <div className="card">
                {discount ? (
                    <div className="discount">
                        <p>{discount}% OFF</p>
                    </div>
                ) : null}
                <div className="card-image-wrapper">
                    <img src={image} alt={name} className="card-image" />
                </div>
                <div className="card-content">
                    <div className="card-category-id">
                        <p className="card-category">{category}</p>
                        <p className="id-product">SKU: {id}</p>
                    </div>
                    <div className="card-title-product">
                        <h3 className="card-title">{name}</h3>
                        <div className="color-options">
                            <div className="color-options-one"></div>
                            <div className="color-options-two"></div>
                        </div>
                    </div>
                    <div className="card-details">
                        <p id="price">{formattedPrice}</p>
                        <p id="add-to-cart">ADD TO CART</p>
                        <p id="arrow">⮕</p>
                    </div>
                </div>
            </div>
        </>
    )}

export default Card_Store
