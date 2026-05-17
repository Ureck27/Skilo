
function Item_Bar({img, text, num}) {
    return(
        <>
            <div className="item-bar">
                <img src={img} alt={text} />
                <p>{text} ({num})</p>
            </div>
        </>
    )
}

export default Item_Bar;