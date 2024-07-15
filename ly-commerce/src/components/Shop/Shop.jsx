import React from 'react'
import { useState, useEffect } from 'react'

export default function Shop() {
    const [product, setProduct ] = useState([]);

    useEffect(()=> {
      products()
    }, [])

    const products = async () =>{
      const response = await fetch('http://localhost:9000/API/getall');

      console.log(response.body)
      setProduct(await response)
    }

    

  return (
    <div>
      <p>shop</p>
    </div>
  )
}
