import React from 'react'
import HomeItem from '../components/HomeItem'
import { useSelector } from "react-redux"

const Home = () => {

    
  const filteredProducts = useSelector(state => state.filter.filteredProducts) 
  
  return (
    <main>
        <div className="items-container">
          {
            filteredProducts.map((item) => (
              <HomeItem key={item.id} item={item} />
            ))
          }
        </div>
    </main>
  )
}

export default Home