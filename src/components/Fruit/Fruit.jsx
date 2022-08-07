import React from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../actions/fruits.action";

const Fruit = ({
    fruit
}) => {

    const dispatch = useDispatch()

    const remuve = () => {
        dispatch(actions.remuve(fruit.id))
    }

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
            <button onClick={remuve} >Remuve</button>
        </div>
    )
}

export default Fruit;