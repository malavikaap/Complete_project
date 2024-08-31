// import React, { createContext, useState } from 'react';
// import img1 from '../../assets/sand.jpg';
// import img2 from '../../assets/pizza.jpg';
// import img3 from '../../assets/dessert.jpg';
// import img4 from '../../assets/burger.jpg';
// import img5 from '../../assets/broast.jpg';
// import img6 from '../../assets/veg.jpg';
// import img7 from '../../assets/paneer.jpg';
// import img8 from '../../assets/chik.jpg';

// // Create a new context
// export const StoreContext = createContext();

// const StoreProvider = ({ children }) => {
//   const [food_list] = useState([
//     { id: "642c155b2c4774f05c36eeaa", name: "Sandwitch", recipe: "Crunchy outside, soft inside delicious sandwitches", Image: img1, category: "salad", price: 140 },
//     { id: "642c155b2c4774f05c36eeb9", name: "Pizza", recipe: "Yummy, crispy and cheesy.", Image: img2, category: "drinks", price: 170 },
//     { id: "642c155b2c4774f05c36ee7c", name: "Dessert", recipe: "Sweet, sticky coffee, crushed biscuits", Image: img3, category: "popular", price: 105 },
//     { id: "642c155b2c4774f05c36ee7c", name: "Burger", recipe: "Juicy, single and triple burgers", Image: img4, category: "popular", price: 150 },
//     { id: "642c155b2c4774f05c36ee7c", name: "Broasted Chicken", recipe: "Crispy, delicious broasted chicken", Image: img5, category: "popular", price: 250 },
//     { id: "642c155b2c4774f05c36ee7c", name: "Veg Rice", recipe: "Hearty mix of fresh vegetables, flavored masalas", Image: img6, category: "popular", price: 100 },
//     { id: "642c155b2c4774f05c36ee7c", name: "Paneer Fry", recipe: "Cheesy, tasty fresh paneer fry", Image: img7, category: "popular", price: 140 },
//     { id: "642c155b2c4774f05c36ee7c", name: "Chicken Tikka", recipe: "Tasty, crushed with flavored masalas", Image: img8, category: "popular", price: 200 }
//   ]);

//   const value = {
//     food_list,
//   };

//   return (
//     <StoreContext.Provider value={value}>
//       {children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreProvider;
