import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../actions/fruits.action";

const AddFruit = () => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');

    const dispatch = useDispatch()

    const addFruit = (e) => {
        e.preventDefault();

        const fruit = {
            id: new Date(),
            name,
            quantity,
        }

        dispatch(actions.add(fruit))
    }

    return (
        <form onSubmit={addFruit}>
            <input 
            type='text' 
            name={name} 
            placeholder='Fruit' 
            onChange={e => setName(e.target.value)}
            />
            <input 
            type='number' 
            name={quantity} 
            placeholder='Quantity' 
            onChange={e => setQuantity(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    )
} 

export default AddFruit;