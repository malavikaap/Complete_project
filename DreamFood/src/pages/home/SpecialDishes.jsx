
// import React, { useContext, useState } from 'react'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import { FaAngleLeft, FaAngleRight, FaHeart } from "react-icons/fa";
// import {} from "react-icons/fa"
// import img1 from '../../assets/sand.jpg';
//  import img2 from '../../assets/pizza.jpg';
//  import img3 from '../../assets/dessert.jpg';
//  import img4 from '../../assets/burger.jpg';
//  import img5 from '../../assets/broast.jpg';
//  import img6 from '../../assets/veg.jpg';
//  import img7 from '../../assets/paneer.jpg';
//  import img8 from '../../assets/chik.jpg';
//  import {AuthContext} from '../context/AuthProvider';

// const SpecialDishes = (item) => {
//   const CardItems = [
//     { id: "642c155b2c4774f05c36eeaa", name: "Sandwitch", recipe: "Crunchy outside ,soft inside delicious sandwitches", Image: img1 , category: "salad", price: 140 },
//     { id: "642c155b2c4774f05c36eeb9", name: "Pizza", recipe: "Yummy ,crispy and cheesy.", Image: img2, category: "drinks", price: 170 },
//     { id: "642c155b2c4774f05c36ee7c", name: "Dessert", recipe: "Sweet,sticky cofee,crushed biscuits",  Image: img3, category: "popular", price: 105 },
//     { id: "642c155b2c4774f05c36ee7c", name: "Burger", recipe: "Juicy,single and tripple burgers", Image: img4, category: "popular", price: 150 },
//     { id: "642c155b2c4774f05c36ee7c", name: "Broasted chiken", recipe: "Crispy,delicious broasted chiken", Image: img5, category: "popular", price: 250 },
//     { id: "642c155b2c4774f05c36ee7c", name: "Veg Rice", recipe: "Hearty mix of fresh vegitables,flavoured masalas",  Image: img6, category: "popular", price: 100 },
//     { id: "642c155b2c4774f05c36ee7c", name: "Paneer Fry", recipe: "Cheesy,tasty fresh paneer fry", Image: img7, category: "popular", price: 140},
//     { id: "642c155b2c4774f05c36ee7c", name: "Chikken Tikka", recipe: "Tasty, crushed with flavoured masalas",  Image: img8, category: "popular", price: 200}
//   ]
//   const slider = React.useRef(null);
//   const [isHeartFilled,setIsHeartFilled] = useState(false)
//   const {name, Image, price, recipe, id} = item
//   const  
//   const handleHeartClick = () => {
//     setIsHeartFilled(!isHeartFilled)
//   }

//   const simpleNextArrow = (props) => {
//     const [className,style,onClick] = props;
//     return (
//       <div className={className} style={{...style, display:"block", background:"red"}}
//       onClick={onclick}
//       >NEXT</div>
//     )
//   }

//   const simplePrevArrow = (props) => {
//     const [className,style,onClick] = props;
//     return (
//       <div className={className} style={{...style, display:"block", background:"green"}}
//       onClick={onclick}
//       >BACK</div>
//     )
//   }

//   // settings
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ],
//     nextArrow : <simpleNextArrow/>,
//     prevArrow : <simplePrevArrow/>
//   };

//   const handleAddToCart = (item) => {
//     //console.log('btn clicked',item);
//     const cartItem = {id,name,quantity:1,Image,price}
//     console.log(cartItem);
    
//   }




//   return (
//     <div className='section-container my-20 relative'>
//       <div className='text-left'>
//         <p className='subtitle'>Special Dishes</p>
//         <h2 className='title md:w-[520px]'>Standout Dishes from our Menu</h2>
//       </div>


//       {/*arrow btn*/}
//       <div className='md:absolute right-3 top-8 md:mr-24'>
//         <button onClick={()=> slider?.current?.slickPrev()}  className='btn p-2 rounded-full ml-5 bg-green'><FaAngleLeft className='w-8 h-8 p-1'/></button>
//         <button onClick={()=> slider?.current?.slickNext()} className='btn p-2 rounded-full ml-5'><FaAngleRight className='w-8 h-8 p-1'/></button>
//       </div>

//       <Slider ref={slider} {...settings} className='overflow-hidden mt-10 space-x-5'>
//         {CardItems.map((item, i) => (
//           <div key={i} className='p-2'>
//             <div className='shadow-lg rounded-md bg-primaryBG py-6 px-5 text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all'>
//               <div>
//                 <div className={`rating gap-1 absolute right-2 top-2 p-4 bg-primaryBG ${isHeartFilled ? "text-red" : "text-neutral-900"}`}
//                 onClick={handleHeartClick}
//                 >
//                   <FaHeart className='h-5 w-5 cursor-pointer'/>
//                 </div>
//                 <img src={item.Image} alt={item.name} className=' p-3 rounded-full w-48 h-48 mx-auto'></img>
//               </div>
//               <div className='card-body'>
//                 <h2 className='card-title'>{item.name}</h2>
//                 <p>{item.recipe}</p>
//                 <div className='card-actions justify-between items-center mt-2'>
//                   <h5 className='font-semibold'><span className='text-sm text-red'>${item.price}</span></h5>
//                   <button className='btn btn-primary' onClick={() => handleAddToCart(item)}>Buy Now</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   )
// }

// export default SpecialDishes;

import React, { useContext, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight, FaHeart } from "react-icons/fa";
import img1 from '../../assets/sand.jpg';
import img2 from '../../assets/pizza.jpg';
import img3 from '../../assets/dessert.jpg';
import img4 from '../../assets/burger.jpg';
import img5 from '../../assets/broast.jpg';
import img6 from '../../assets/veg.jpg';
import img7 from '../../assets/paneer.jpg';
import img8 from '../../assets/chik.jpg';
import { CartContext } from "../../context/CartProvider";


const SpecialDishes = () => {
  const CardItems = [
    { id: "642c155b2c4774f05c36eeaa", name: "Sandwitch", recipe: "Crunchy outside ,soft inside delicious sandwitches", Image: img1 , category: "salad", price: 140 },
    { id: "642c155b2c4774f05c36eeb9", name: "Pizza", recipe: "Yummy ,crispy and cheesy.", Image: img2, category: "drinks", price: 170 },
    { id: "642c155b2c4774f05c36ee7c", name: "Dessert", recipe: "Sweet,sticky cofee,crushed biscuits",  Image: img3, category: "popular", price: 105 },
    { id: "642c155b2c4774f05c36ee7c", name: "Burger", recipe: "Juicy,single and tripple burgers", Image: img4, category: "popular", price: 150 },
    { id: "642c155b2c4774f05c36ee7c", name: "Broasted chiken", recipe: "Crispy,delicious broasted chiken", Image: img5, category: "popular", price: 250 },
    { id: "642c155b2c4774f05c36ee7c", name: "Veg Rice", recipe: "Hearty mix of fresh vegitables,flavoured masalas",  Image: img6, category: "popular", price: 100 },
    { id: "642c155b2c4774f05c36ee7c", name: "Paneer Fry", recipe: "Cheesy,tasty fresh paneer fry", Image: img7, category: "popular", price: 140},
    { id: "642c155b2c4774f05c36ee7c", name: "Chikken Tikka", recipe: "Tasty, crushed with flavoured masalas",  Image: img8, category: "popular", price: 200}
  ];

  const slider = React.useRef(null);
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const { addToCart } = useContext(CartContext);

  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
  };

  const simpleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      >NEXT</div>
    );
  };

  const simplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      >BACK</div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    nextArrow: <simpleNextArrow />,
    prevArrow: <simplePrevArrow />
  };

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <div className='section-container my-20 relative'>
      <div className='text-left'>
        <p className='subtitle'>Special Dishes</p>
        <h2 className='title md:w-[520px]'>Standout Dishes from our Menu</h2>
      </div>

      {/*arrow btn*/}
      <div className='md:absolute right-3 top-8 md:mr-24'>
        <button onClick={() => slider?.current?.slickPrev()} className='btn p-2 rounded-full ml-5 bg-green'><FaAngleLeft className='w-8 h-8 p-1' /></button>
        <button onClick={() => slider?.current?.slickNext()} className='btn p-2 rounded-full ml-5'><FaAngleRight className='w-8 h-8 p-1' /></button>
      </div>

      <Slider ref={slider} {...settings} className='overflow-hidden mt-10 space-x-5'>
        {CardItems.map((item, i) => (
          <div key={i} className='p-2'>
            <div className='shadow-lg rounded-md bg-primaryBG py-6 px-5 text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all'>
              <div>
                <div className={`rating gap-1 absolute right-2 top-2 p-4 bg-primaryBG ${isHeartFilled ? "text-red" : "text-neutral-900"}`}
                  onClick={handleHeartClick}
                >
                  <FaHeart className='h-5 w-5 cursor-pointer' />
                </div>
                <img src={item.Image} alt={item.name} className=' p-3 rounded-full w-48 h-48 mx-auto'></img>
              </div>
              <div className='card-body'>
                <h2 className='card-title'>{item.name}</h2>
                <p>{item.recipe}</p>
                <div className='card-actions justify-between items-center mt-2'>
                  <h5 className='font-semibold'><span className='text-sm text-red'>${item.price}</span></h5>
                  <button className='btn btn-primary' onClick={() => handleAddToCart(item)}>Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SpecialDishes;
