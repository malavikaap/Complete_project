
// import React from 'react'

// const Cards = (props) => {
//   return (
//          <div className="card bg-base-100 w-96 shadow-xl">
//           <figure>
//             <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
//           </figure>
//           <div className="card-body">
//             <h2 className="card-title">Shoes!</h2>
//             <p>If a dog chews shoes whose shoes does he choose?</p>
//             <div className="card-actions justify-end">
//               <button className="btn btn-primary">Buy Now</button>
//             </div>
//           </div>
//         </div> 
//   )
// }

// export default Cards

import React from 'react'

const Cards = ({ item }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={item.image} alt={item.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <p>{item.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Order Now</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
