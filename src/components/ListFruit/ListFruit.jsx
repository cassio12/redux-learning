import React from "react";
import AddFruit from "../AddFruit/AddFruit";
import Fruit from "../Fruit/Fruit";
import { useSelector } from "react-redux";

const ListFruit = () => {
    const fruit = useSelector(state => state.fruitReducers.fruit) 

    return (
        <>
            <h1>List of Fruit</h1>
            <AddFruit/>
            {
                fruit.map(item => (
                    <Fruit key={item.id} fruit={item} />
                ))
            }
        </>
    )
}

export default ListFruit;