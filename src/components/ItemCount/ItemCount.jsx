import { useState } from 'react'
import './ItemCount.css'

function ItemCount({stock}){

    const [count, setCount] = useState(1)

    const less = () => {
        if(count>1){
            setCount(count - 1)
        }
    }

    const add = () => {
        if(count < stock){
            setCount(count + 1)
        }
    }

    return(
        <div className='itemCount'>
            <button  onClick={less} className='itemCount-button'>-</button>
            <span className='itemCount-value'>{count}</span>
            <button  onClick={add} className='itemCount-button'>+</button>
        </div>
    )
}

export default ItemCount