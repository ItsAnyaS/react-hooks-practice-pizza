import React from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";
import {useState, useEffect} from 'react'
function App() {
  const [pizzas, setPizzas] = useState([])
  const [pizza, setPizza] = useState({})
  const [reload, setReload] = useState(false)
  useEffect(()=> {
const getPizzas = async () => {
let req = await fetch("http://localhost:3001/pizzas");
let res = await req.json()
setPizzas(res)
}
getPizzas()
  }, [reload])

  const handleOnChange =(name, value) => {
    setPizza({
      ...pizza, 
      [name]: value
    })
  }

  return (
    <>
      <Header />
      <PizzaForm pizza={pizza} handleOnChange={handleOnChange} setReload={setReload}/>
      <PizzaList pizzas={pizzas} setPizza={setPizza}/>
    </>
  );
}

export default App;
