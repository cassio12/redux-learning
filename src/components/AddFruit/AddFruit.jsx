import React, { useState } from "react";

const AddFruit = () => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');

    const addFruit = (e) => {
        e.preventDefault();

        const fruit = {
            id: new Date(),
            name,
            quantity,
        }

        console.log('Add fruit', fruit);
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