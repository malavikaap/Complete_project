import React from 'react'
import img1 from '../../assets/main.jpg';
 import img2 from '../../assets/break.jpg';
 import img3 from '../../assets/desert1.jpg';
 import img4 from '../../assets/all.jpg';

const categoryItems = [
    {id: 1, title: "Main Dish", des: "(86 dishes)", Image: img1},
    {id: 2, title: "Breakfast", des: "(12 breakfast)", Image: img2},
    {id: 3, title: "Dessert", des: "(48 desserts)", Image: img3},
    {id: 4, title: "Browse All", des: "(255 Items)", Image: img4},
]

const Categories = () => {
  return (
    <div className='section-container py-16'>
        <div className='text-center'>
            <p className='subtitle'>Customer Favorites</p>
            <h2 className='title'>Popular Categories</h2>
        </div>

        {/*Category cards*/}
        <div className='flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12'>
            {
                categoryItems.map((item, i) => (
                    <div key={i} className='shadow-lg rounded-md bg-primaryBG py-6 px-5 w-72 mx-auto text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all'>
                        <div className='flex w-full mx-auto items-center justify-center'>
                            <img src={item.Image} alt='' className='p-5 rounded-full w-48 h-48'></img>
                        </div>
                        <div className='mt-5 space-y-1'>
                            <h5>{item.title}</h5>
                            <p>{item.des}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Categories
