import React from 'react'
import { useSelector } from "react-redux"
import "../index.css"

const BagSummary = () => {
    const bagItemIds = useSelector(state => state.bag)
    const items = useSelector((state) => state.items);

    
    const CONVENIENCE_FEES = 99;
    let totalItem = bagItemIds.length;
    let totalMRP = 0;
    let totalDiscount = 0;
  const finalItems = items.filter((item) => {
    const itemIndex = bagItemIds.indexOf(item.id);
    return itemIndex >= 0;
  });

  

  

  finalItems.forEach(bagItem => {
  const discountCalc = Math.floor((bagItem.price % bagItem.discountPercentage) * 100)
  console.log(discountCalc)
    totalMRP += bagItem.price;
    totalDiscount += bagItem.price - discountCalc 
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES


  return (
    <div className="bag-summary">
    <div className="bag-details-container">
      <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
      <div className="price-item">
        <span className="price-item-tag">Total MRP</span>
        <span className="price-item-value">₹{totalMRP}</span>
      </div>
      <div className="price-item">
        <span className="price-item-tag">Discount on MRP</span>
        <span className="price-item-value priceDetail-base-discount">
          -₹{totalDiscount}
        </span>
      </div>
      <div className="price-item">
        <span className="price-item-tag">Convenience Fee</span>
        <span className="price-item-value">₹99</span>
      </div>
      <hr />
      <div className="price-footer">
        <span className="price-item-tag">Total Amount</span>
        <span className="price-item-value">₹{finalPayment}</span>
      </div>
    </div>
    <button className="btn-place-order">
      <div className="css-xjhrni">PLACE ORDER</div>
    </button>
  </div>
  )
}

export default BagSummary