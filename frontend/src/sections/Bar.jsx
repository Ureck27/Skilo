import "./Bar.css"
import helmet from "../assets/storeimage/Helmet.jpg";
import boot from "../assets/storeimage/boot.jpg";
import backpack from "../assets/storeimage/backpack.jpg";
import Item_Bar from "../components/Item-Bar";
function Bar() {
    const items = [
        { img: helmet, text: "Helmet", num: 5 },
        { img: boot, text: "Boots", num: 3 },
        { img: backpack, text: "Backpack", num: 2 },
    ];

    return (
        <div className="bar-container">
            <div className="bar">
                <div className="bar-set">
                    {items.map((item, index) => (
                        <Item_Bar key={`set1-${index}`} img={item.img} text={item.text} num={item.num} />
                    ))}
                </div>
                <div className="bar-set">
                    {items.map((item, index) => (
                        <Item_Bar key={`set2-${index}`} img={item.img} text={item.text} num={item.num} />
                    ))}
                </div>
                {/* Adding a third set to ensure coverage on very wide screens if needed, 
                    but two is usually enough for the -50% trick. 
                    Let's stick to two for the -50% logic. */}
            </div>
        </div>
    );
}

export default Bar;