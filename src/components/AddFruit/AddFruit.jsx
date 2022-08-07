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
        cleanValue()
    }

    const cleanValue = () => {
        setName('')
        setQuantity('')
    }

    return (
        <form onSubmit={addFruit}>
            <input 
            type='text' 
            name={name} 
            placeholder='Fruit' 
            onChange={e => setName(e.target.value)}
            value={name}
            />
            <input 
            type='number' 
            name={quantity} 
            placeholder='Quantity' 
            onChange={e => setQuantity(e.target.value)}
            value={quantity}
            />
            <button type="submit">Add</button>
        </form>
    )
} 

export default AddFruit;