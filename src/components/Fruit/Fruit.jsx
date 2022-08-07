import React from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../actions/fruits.action";

const Fruit = ({
    fruit
}) => {

    const dispatch = useDispatch()

    const remove = () => {
        dispatch(actions.remove(fruit.id))
    }

    return (
        <div className="fruta">
            <ul>
                <li>
                    <strong>Fruit: </strong>{fruit.name}
                </li>
                <li>
                    <strong>Quantity: </strong>{fruit.quantity}
                </li>
            </ul>
            <button onClick={remove}>Remove</button>
        </div>
    )
}

export default Fruit;