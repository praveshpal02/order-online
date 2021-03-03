import React from 'react'
import Rating from './rating';

export default function product(props) {
    const {product} = props;
    return (
        <div className="col-sm-3">
            <div className="card">
                <img className="card-img-top" src={product.image} alt="Card image"/>
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <div class="price">${product.price}</div>
                    <Rating rating={product.rating} numReview={product.numReviews}/>
                    <a href="#" className="btn btn-primary">Add to cart</a>
                </div>
            </div>
        </div>
    )
}
