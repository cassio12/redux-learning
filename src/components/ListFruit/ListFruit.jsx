import React from "react";
import AddFruit from "../AddFruit/AddFruit";
import Fruit from "../Fruit/Fruit";


const ListFruit = () => {

    const fruit = [
        {id: 1, name: 'Mamão', quantity: 3},
        {id: 2, name: 'Amora', quantity: 20},
    ]

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