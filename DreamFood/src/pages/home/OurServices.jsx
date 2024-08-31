import React from 'react'
import img1 from '../../assets/cater.jpg';
 import img2 from '../../assets/parcel.jpg';
 import img3 from '../../assets/order.jpg';
 import img4 from '../../assets/gift.jpg';

const serviceList = [
    { id: 1, title: "catering", des: "Delight your guest with our flavours and presentation", Image: img1},
     { id: 2, title: "Fast delivery", des: "We deliver your order promptly to your door", Image: img2 },
     { id: 3, title: "online ordering", des: "Explore menu and order with ease using our online ordering", Image: img3 },
     { id: 4, title: "Gift Cards", des: "Give the gift of exceptional dining with food gift cards", Image: img4 }
];


const OurServices = () => {
  return (
    <div className='section-container my-16'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-12'>
            {/* text*/}
            <div className='md:w-1/2'>
                <div className='text-left md:w-4/5'>
                    <p className='subtitle'>Services</p>
                    <h2 className='title'>Our Culinary Journey And Services</h2>
                    <blockquote className='my-5 text-neutral-950 leading-[30px]'>"Rooted in passion ,we curate unforgettable dining experiences and offer expectional services,blending culinary artistry with warm hospitality."
                    </blockquote>


                    <button className='btn bg-green text-white px-8 py-3 rounded-full'>Explore</button>
                </div>
            </div>
            {/*images*/}
            <div className='md:w-1/2'>
                <div className='grid sm:grid-cols-2 grid-cols-1 gap-8 items-center'>
                    {
                        serviceList.map((service) => (
                            <div key={service.id} className='shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-green cursor-pointer hover:border-b-neutral-700 transition-all duration-200 hover:border'>
                                <img src={service.Image} className='mx-auto w-48 h-48 object-cover'></img>
                                <h5 className='pt-3 font-semibold'>{service.title}</h5>
                                <p className='text-[#988D95]'>{service.des}</p>
                             </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurServices