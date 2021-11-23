import React from 'react'
import HomeScreen from './Screens/HomeScreen'
import Cart from "./Components/Cart"
import Nav from "./Components/Nav"

const App = () => {
  return (
    <div>
      <Nav/>

<Cart/>
      <HomeScreen/>
    </div>
  )
}

export default App
