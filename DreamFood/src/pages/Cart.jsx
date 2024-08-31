
import React from 'react'

const Cart = () => {
  return (
    <div className="w-full p-5 mt-24">
      <div className="w-full bg-gray-100 p-5 rounded-lg shadow-md">
        <div className="grid grid-cols-6 gap-4 font-bold text-center border-b-2 border-gray-300 pb-2">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className="border-gray-300 mt-5" />
      
      </div>
    </div>
  );
}

export default Cart

