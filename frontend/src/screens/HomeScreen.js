import React from 'react';
import Product from '../components/product';
import data from '../data';

export default function HomeScreen() {
    return (
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
    )
}
