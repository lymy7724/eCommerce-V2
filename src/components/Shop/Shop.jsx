import React from 'react'
import { useState, useEffect } from 'react'
import './Shop.css'

export default function Shop() {
    const [product, setProduct ] = useState([]);
    const [category, setCategory] = useState(product);


    const handleBtns = (e) => {
    let word=e.target.value;
     
    if(word === "All"){
      setCategory(product)
    }
    else if(word === "Animals") {
      const filtered = product.filter(item=>item.category === "Animals");
      setCategory(filtered)
    }
    else if(word === "Disney") {
      const filtered = product.filter(item=>item.category === "Disney");
      setCategory(filtered)
    }
    else if(word === "Food") {
      const filtered = product.filter(item=>item.category === "Food");
      setCategory(filtered)
    }
    else if(word === "Superheros") {
      const filtered = product.filter(item=>item.category === "Superheros");
      setCategory(filtered)
    }
  }

    useEffect(()=> {
      products();
    }, [])

    const products = async () => {
      const list = await fetch('http://3.142.237.182:9000/API/getall')
      const items = await list.json()
      setProduct(items)
      setCategory(items)
      }

  return (
    <>
    
    <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", backgroundColor: "rgba(107, 173, 230, 0.28)"}}>
      
      <h2>Shop our products</h2>

      <div class="dropdown">
        <button class="dropbtn">Filter by:</button>
        <div class="dropdown-content">
        <button value="All" onClick={handleBtns}>All</button>
                  <button value="Animals" onClick={handleBtns}>Animals</button>
                  <button value="Disney" onClick={handleBtns}>Disney</button>
                  <button value="Food" onClick={handleBtns}>Food</button>
                  <button value="Superheros" onClick={handleBtns}>Superheros</button>
        </div>
      </div>
    
      <div id="product-cont">
      
      {category.map((item) => (
         
        <div id='cardImg'>
        <div className='img-hover'><img src={item.image} alt="" className='images'/></div>
          <p className='name'>{item.product_name}</p>
          <p>{item.description}</p>
          <p className='price'>${item.price}</p>
          <div className="cart2"><button className="cartButton">ADD TO CART</button></div>
          </div>
          
        ))}
      </div>
    </div>
    </>
  )
}
