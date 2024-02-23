import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onSearchChange, onItemFormSubmit }) {
  
  const [ search,  setSearch] = useState("");
  
  

  function onSearchChange(event) {
    setSearch(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
   return item.name.toLowerCase().includes(search.toLocaleLowerCase())
  });


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter search={search} onSearchChange={onSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
