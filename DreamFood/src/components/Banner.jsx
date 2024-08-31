import React from 'react'
import profilepic from '../assets/homeimg.jpg'
import profilepic1 from '../assets/img3.jpg'

const Banner = () => {
  return (
    <div className='section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
      <div className='py-24 flex flex-col md:flex-row justify-between items-center gap-8'>
        {/*text*/}
        <div className='md:w-1/2 space-y-7 px-4'>
          <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug'>Dive into Delights of Detectable <span className='text-green'>Food</span> </h2>
          <p className='text-xl text-[#4A4A4A]'>Where each plate weaves a story of culinary mastery and passionate Craftmanships</p>
          <button className='btn bg-green px-8 py-3 font-semibold rounded-full'>Order now</button>
        </div>

        {/*images */}
        <div className='md:w-1/2'>
          <img src={profilepic}></img>
            <div className='flex flex-col md:flex-row items-center justify-around -mt-14 gap-2'>
             <div className='flex bg-primaryBG py-2 px-3 rounded-2xl items-center gap-3 shadow-md'>
               <img src={profilepic1} className='rounded-2xl'></img>
                <div className='space-y-1'>
                  <h5 className='font-medium'>Spicy chiken</h5>
                   <div className='rating rating-sm'>
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange" readOnly />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange" defaultChecked readOnly/>
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange" readOnly/>
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange" readOnly />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange" readOnly/>
                    </div>
                  <p className='text-red'>$18.00</p>
                </div>
              </div>
                <div className='sm:flex hidden bg-primaryBG py-2 px-3 rounded-2xl items-center gap-3 shadow-md'>
                  <img src={profilepic1} className='rounded-2xl'></img>
                  <div className='space-y-1'>
                    <h5 className='font-medium'>Spicy chiken</h5>
                    <div className='rating rating-sm'>
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange" readOnly/>
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange" defaultChecked readOnly/>
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange" readOnly/>
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange"  readOnly/>
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange"  readOnly />
                    </div>
                    <p className='text-red'>$18.00</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Banner
