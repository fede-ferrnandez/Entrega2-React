import './ItemDetail.css'
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary'
import { ShoppingBasket } from 'lucide-react'
import ItemCount from '../ItemCount/ItemCount'
import { useNavigate } from 'react-router'


function ItemDetail({product}) {

    const navigate = useNavigate()

    const navigateProductDetail = () => {
        navigate(`/product-detail/${product.id}`)
    }
    

    return(
        <div className='itemDetail'>
            <img src={product.image} alt={product.title} />
            <h3 className='itemDetail-title'>{product.title}</h3>
            <p className='itemDetail-description'>{product.description}</p>
            <ItemCount stock={product.stock}/>
            <span className='itemDetail-price' >{product.price} $ ARG</span>
            <div className='itemsDetail-buttons'>
                <ButtonPrimary>
                    <ShoppingBasket />
                    Carrito
                </ButtonPrimary>
                <ButtonPrimary onClick={navigateProductDetail} >
                    Detalle
                </ButtonPrimary>
            </div>
        </div>
    )
}

export default ItemDetail