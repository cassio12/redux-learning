import React from "react";


const Fruit = ({
    fruit
}) => {

    return (
        <div>
            <ul>
                <li>
                    <strong>Fruit: </strong>{fruit.name}
                </li>
                <li>
                    <strong>Quantity: </strong>{fruit.quantity}
                </li>
            </ul>
            <button  >Remuve</button>
        </div>
    )
}

export default Fruit;