import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import './Shop.css'

export default function Shop() {
    const [product, setProduct ] = useState([]);
    const [category, setCategory] = useState(product);
    const [priceList, setPriceList] = useState(product);

    const addtoCart=(name, price, image) =>{
      axios.post('https://ecommerce-v2-loko.onrender.com/addtoCart', {
        item_name: name,
        item_price: price,
        item_image: image
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }


  const handleBtns = (e) => {
    let word=e.target.value;

      // filter products by matching category
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

  const setLowtoHigh = () => {
    const sortedProducts = product.sort((a, b) => a.price - b.price);
    setPriceList([...sortedProducts]);
  }
  const setHighToLow = () => {
    const reverseSortedProducts = product.sort((a, b) => b.price - a.price);
    setPriceList([...reverseSortedProducts])
  }
  
  // runs products function when the page loads
    useEffect(()=> {
      products();
    }, [])

    // fetches product info from hosted server 
    const products = async () => {
      //const list = await fetch('http://localhost:9000/API/getall')
      const list = await fetch('https://ecommerce-v2-loko.onrender.com/API/getall')
      const items = await list.json()
      setProduct(items)
      setCategory(items)
    }

  return (
    <>
    <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", backgroundColor: "rgba(107, 173, 230, 0.28)"}}>
      
      <h2>Shop our products</h2>

    <div id='filter-buttons'>
      <div className="dropdown">
        <button className="dropbtn">Filter by: Category</button>
        <div className="dropdown-content">
        <button value="All" onClick={handleBtns}>All</button>
        <button value="Animals" onClick={handleBtns}>Animals</button>
        <button value="Disney" onClick={handleBtns}>Disney</button>
        <button value="Food" onClick={handleBtns}>Food</button>
        <button value="Superheros" onClick={handleBtns}>Superheros</button>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Sort by: </button>
        <div className="dropdown-content">
        <button value="All" onClick={setLowtoHigh}>Price: Low to High</button>
        <button value="Animals" onClick={setHighToLow}>Price: High to Low</button>
        </div>
      </div>
    </div>
    
    
      <div id="product-cont">
      
      {category.map((item) => (
         
        <div id='cardImg'>
        <div className='img-hover'><img src={item.image} alt="" className='images'/></div>
          <p className='name'>{item.product_name}</p>
          <p>{item.description}</p>
          <p className='price'>${item.price}</p>
          <div className="cart2"><button className="cartButton" onClick={()=>addtoCart(item.product_name, item.price, item.image)}>ADD TO CART</button></div>
          </div>
          
        ))}
      </div>
    </div>
    </>
  )
}
