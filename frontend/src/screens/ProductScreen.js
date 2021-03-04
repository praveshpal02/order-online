import React from 'react'
import { Link } from 'react-router-dom';
import Rating from '../components/rating';
import data from '../data'

export default function ProductScreen(props) {
    const product = data.products.find(x => x._id === props.match.params.id);

    if(!product){
        return <div>Product Not Found </div>
    }
    return (
        <div className="container-fluid pd-detail">
            <Link to="/" className="back-btn"><i className="fa fa-angle-left"></i> Back to Home</Link>
            <div className="row">
                <div className="col-sm-5">
                    <img className="img-responsive" src={product.image} alt={product.name}/>
                </div>
                <div className="col-sm-4">
                    <ul class="pd-des">
                        <li><h4>{product.name}</h4></li>
                        <li>
                            <Rating rating={product.rating} numReview={product.numReviews}/>
                        </li>
                        <li>Price: ${product.price}</li>
                        <li>Description: {product.description}</li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <div className="cart-group card card-body">
                        <ul className="">
                            <li>
                                <div className="row">
                                    <div>Price: </div>
                                    <div className="Price">${product.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Status: </div>
                                    <div className="status">{product.countInStock >0? 
                                    (<span className="success">In Stock</span>)
                                    :(<span className="error">Out of Stock</span>)
                                    } </div>
                                </div>
                            </li>
                            <li>
                                <div class="row">
                                <button className="btn btn-primary btn-block"><i  className="fa fa-cart"></i>Add To Cart</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
