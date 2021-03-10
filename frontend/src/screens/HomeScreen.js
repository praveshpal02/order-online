import React, { useEffect } from 'react';

import Product from '../components/product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

export default function HomeScreen() {
    const dispatch= useDispatch();
    const productList = useSelector( state=> state.productList);
    console.log(productList,"test");
    const {loading,error,products}= productList;

    useEffect(() => {
      dispatch(listProducts());
    }, [dispatch])
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
