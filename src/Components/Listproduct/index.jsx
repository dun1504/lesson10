import React,{useEffect, useState} from 'react'
import "./style.css"
const Product = ({element}) => {
    return (
      <div className='product'>
        <img src={element.image} />
        <h1>{element.title}</h1>
        <i>Price: {element.price}</i>
      </div>
    )
  }

const Listproduct = () => {
 const [products, setProducts] = useState([])

useEffect(() => {
  fetchData()
})

const fetchData = async () => {
  const response = await fetch("https://fakestoreapi.com/products")
  const data = await response.json()
  setProducts(data)
}
return (
  <div className='listproduct'>
    {products.map((el, index) => <Product element={el}/>)}
  </div>
)
}

    

export default Listproduct