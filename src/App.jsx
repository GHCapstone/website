import { useState, useEffect } from 'react'
import './App.css'
// import AllProducts from '.components/AllProducts'

function App() {
  
  const [products, setProducts] = useState([]);
  const API = "https://fakestoreapi.com/products";

  useEffect(()=> {
    const fetchProducts = async()=> {
      const response = await fetch(API);
      const json = await response.json();
      console.log(json);
      setProducts(json.products);
    }
    fetchProducts();
  }, []);

  return (
    <>
      <h1>Website</h1>
      <nav>
      
      </nav>
      <div>

      </div>
    </>
  )
}

export default App
