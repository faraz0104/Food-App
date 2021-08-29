import React, {useState,useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home'
import Burger from './components/Burger';
import Pizza from './components/Pizza';
import Cart from './components/Cart';
import axios from 'axios'
const url = "http://localhost:5000";
export const FoodContext = React.createContext();
function App() {
  let [data,setData] = useState([]);
  let [cart,setCart] = useState([]);
  let [cartValue, setCartValue] = useState(cart.length);

  let getData = async()=>{
    let d =  await axios.get(`${url}/food`)
    setData(d.data);
  }

  useEffect(()=>{
    getData();
  },[])

  return (
    <Router>
      <FoodContext.Provider value={{data,cart,setCart,cartValue,setCartValue,url}}>
      <Header/>
      <Switch>
        <Route path='/burger' component={Burger}/>
        <Route path='/pizza' component={Pizza}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/' component={Home}/>
      </Switch>
      </FoodContext.Provider>
    </Router>
  );
}
export default App;