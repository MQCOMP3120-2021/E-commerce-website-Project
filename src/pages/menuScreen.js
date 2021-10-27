import React, {useState, useEffect} from 'react';
import '../css/menuScreen.css';
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";


const ListOfProducts = ({products}) => {
  const [allProducts, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')

  const searchQuery = products.filter((p) => {
    if(p.category === category){
      return (p.name.toLowerCase().includes(search))
    }
    else if(category === "all"){
      return (p.name.toLowerCase().includes(search))
    }
    
  })
  
  const displayProducts = () => {
    return(
      searchQuery.map((item) => 
      <div className="itemDisplay">
          <li key={item.id}>
              <Link to={`/products/${item.id}`}><img src={item.photo} alt="bread"></img></Link>
                  <div className="itemName">
                      <p>{item.name}</p>
                  </div>
                  <div className="itemPrice">
                      <p>{item.price}</p>
                  </div>
                  
          </li>
        </div>
      )
    )
  }

  return(
    <>
      <div className="SearchBar">
          <form>
                <input
                  type="textBox"
                  id="header-search"
                  placeholder="Search item"
                  name="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
          </form>
      </div>
      <div className="filterResults">
          <p>category</p>
          <select value={category} onChange = {(e) => {setCategory(e.target.value)}}>
            <option value = "all">All</option>
            <option value = "artisan bread">Artisan Bread</option>
            <option value = "pastry">Pastry</option>
            <option value = "sweets">Sweets</option>
          </select>
      </div> 
      <ul>
          <section className="menuContainer">
            {displayProducts()}
          </section>
      </ul>
     </>
 )
}

export default ListOfProducts;


