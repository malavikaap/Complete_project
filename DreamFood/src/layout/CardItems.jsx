import React from 'react'
import Cards from '../components/Cards'

const CardItems = () => {
  return (
    <div>
        <img src={props.img} alt='img'></img>
        <div>
            <h3>{props.title}</h3>
            <div>
                <Cards/>
                <Cards/>
            </div>
        </div>
    </div>
  )
}

export default CardItems