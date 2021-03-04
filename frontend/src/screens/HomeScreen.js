import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Product from '../components/product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function HomeScreen() {
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);
    useEffect(() => {
       const fetchData = async () =>{
           try {
            setLoading(true);
            
            const {data} = await axios.get('/api/products');
            setProducts(data);
            setLoading(false);
           } catch (err) {
               setError(err.message);
               setLoading(false);
           }
       };
       fetchData();
    }, [])
    return (
        <div>
            {loading? (<LoadingBox/> 
            ): error ? ( 
            <MessageBox variant="danger">{error}</MessageBox>
            ): (
                <section className="pd-sec">
                    <div className="container">
                        <div className="row">
                        
                            {products.map((product)=>{
                            return (
                                <Product key={product._id} product={product}/>
                            )
                            })}
                        
                        
                        </div>
                    </div>
                </section>
            )
            }
        
        
    </div>
    )
}
