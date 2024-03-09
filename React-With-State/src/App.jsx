import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import FruitsData from './component/FruitItems';
import Container from './component/Container';
import FoodInput from './component/FoodInput';
import { useState } from 'react';


function App() {

  
  let [fruitData , setFruitData] = useState(['apple','mango','papaya','banana'])


  
  let OnKeyDown = (e)=> {
    // console.log(e.target.value)

    if (e.key === 'Enter') {
      let newFood = e.target.value;
      e.target.value = '';
      // console.log('the new item of food is' , newFood);
      let newItems = [...fruitData, newFood]

      setFruitData(newItems)
    }
  }


  return (
    <>
    <Container>

    <h3>Fruits Juice</h3>
    <FoodInput handleOnKeyDown = {OnKeyDown}/>
      <FruitsData items = {fruitData}/>
      </Container>


    </>
  )
}

export default App