import React, { useContext, useState } from 'react'
import './card.css'
import totalContext from '../context'

const Card = ({ title, price, desc, image }) => {
    const [count, setCount] = useState(0)
    const { total, setTotal } = useContext(totalContext)

    function handleClickIncrement() {
        setCount(count + 1)
        setTotal(total + price)
    }

    function handleClickDecrement() {
        setCount(count => {
            if (count > 0) {
                setTotal(total => Math.max(0, +(total - price).toFixed(2)))
                return count - 1
            }
            return count
        })
    }


    return (
        <div className='card'>
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <p>{desc}</p>
            <p>{price}</p>
            <p>{count}</p>
            <button onClick={handleClickIncrement}>añadir</button>
            <button onClick={handleClickDecrement}>quitar</button>
        </div>
    )
}

export default Card