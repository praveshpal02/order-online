import React from 'react';
import Navbar from './components/Navbar';
import Product from './components/product';
import data from './data';

export default function App() {
  
  return (
    <div className="page-wrapper">
      <header>
        <Navbar/>
      </header>

      <section className="pd-sec">
        <div className="container">
          <div className="row">
            
              {data.products.map((product)=>{
                return (
                  <Product key={product._id} product={product}/>
                )
              })}
           
          
          </div>
        </div>
      </section>
      
    </div>
  )
}
