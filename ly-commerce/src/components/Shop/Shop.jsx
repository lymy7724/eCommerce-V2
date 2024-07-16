import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './Shop.css'

export default function Shop() {
    const [product, setProduct ] = useState([]);

    useEffect(()=> {
      products()
    }, [])

    const products = () => {
      axios
        .get('http://localhost:9000/API/getall')
        .then((res) => {
          console.log(res);
          setProduct(res.data)
        })
        .catch((err) => {
          console.log(err);
        });
      }

  return (
    <div>
      {product.map((item) => (
        <>
        <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", backgroundColor: "rgba(107, 173, 230, 0.28)"}}>
        <h2>Shop our products</h2>
        <div id="product-container">
        <div className='card'>
        <div className='img-hover'><img src={item.image} alt="" className='images'/></div>
          <p className='name'>{item.product_name}</p>
          <p>{item.description}</p>
          <p className='price'>${item.price}</p>
          <div className="cart2"><button className="cart">ADD TO CART</button></div>
          </div>
        </div>
        
          </div>
          </>
      ))}
    </div>
  )
}
