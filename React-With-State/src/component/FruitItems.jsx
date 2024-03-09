import Items from "./Items"
import { useState } from "react"


let FruitsData = ({items})=>{


    let [activeItem, setActiveItem] = useState([])


let OnSellButton = (item,e) => {
    let newItems = [...activeItem,item]
    setActiveItem(newItems)
}
   
    return (
        
      <ul className="list-group">

      {items.map((item) => (
       <Items
       key={item}
        fruitName = {item}
        sold = {activeItem.includes(item)}
        handleClickButton ={(e) =>OnSellButton(item,e)}
        
       /> 

      ))}
      
    </ul>
 
    )
}

export default FruitsData