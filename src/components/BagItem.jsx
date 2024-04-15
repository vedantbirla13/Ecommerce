import React from 'react'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import { useDispatch } from "react-redux"
import { bagActions } from '../store/bagSlice';

const BagItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(bagActions.removeFromBag(item.id))
  }

  const finalPrice = Math.floor((item.price % item.discountPercentage) * 100)
  // console.log(finalPrice)

  return (
    <div className="bag-item-container">
    <div className="item-left-part">
      <img className="bag-item-img" src={item.thumbnail} />
    </div>
    <div className="item-right-part">
      <div className="item-name py-2">{item.title}</div>
      <div className="company py-2">{item.description.substring(0,30) + "..."}</div>
      <div className="price-container">
        <span className="current-price">Rs {item.price}</span>
        <span className="original-price">Rs {finalPrice}</span>
        <span className="discount-percentage px-2">
          ({item.discountPercentage}% OFF)
        </span>
      </div>
      <div className="return-period">
        <span className="return-period-days">7 days</span>{" "}
        return available
      </div>
      <div className="delivery-details">
        Delivery by
        <span className="delivery-details-days px-1">{item.brand}</span>
      </div>
    </div>

    <div className="remove-from-cart" onClick={handleDelete}>
        <RiDeleteBin5Fill size="18px" />
      </div>
</div>
  )
}

export default BagItem