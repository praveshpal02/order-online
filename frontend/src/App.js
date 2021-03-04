import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

export default function App() {
  
  return (
    <BrowserRouter>
    <div className="page-wrapper">
        <header>
          <Navbar/>
        </header>

        <main>
        <Route path="/product/:id" component={ProductScreen}></Route>
        <Route path="/" component={HomeScreen} exact></Route>
        </main>
    </div>
    </BrowserRouter>
)
}
