import React, { useEffect, useState } from 'react'
import SingleProduct from '../components/SingleProduct'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { singleProductActions } from '../store/singleProductSlice';


const Product = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const singleProduct = useSelector((state) => state.singleProduct)

   


    useEffect(() => {
        const fetchData = async () => {
            try {
 
      
              const response = await fetch(`https://dummyjson.com/products/${id}`);
              const data = await response.json();
          
              dispatch(singleProductActions.getSingleProduct(data));
   
            } catch (error) {
              console.error('Error fetching product:', error);
              
            }
          };
      
          fetchData();
      
          return () => {
            // Cleanup function
            dispatch(singleProductActions.getSingleProduct({})); // Clear previous product data
          };
      }, [dispatch, id]);


  return (
    <SingleProduct singleProduct={singleProduct} />
  )
}

export default Product