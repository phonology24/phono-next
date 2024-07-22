import React, { useState } from 'react'

const AddToCartButton = () => {
    const[showCart, setShowCart] = useState(false);

   const handleShowCart = () => {
        setShowCart(true)
    }

  return (
    <div>
      <button onClick={handleShowCart}></button>
    </div>
  )
}

export default AddToCartButton
