import { useEffect, useState } from "react"
import { useParams } from "react-router"
import ButtonPrimary from "../components/ButtonPrimary/ButtonPrimary"
import { ShoppingBasket } from "lucide-react"

function ProductDetail() {

    const {productId} = useParams()

    const [product, setProduct] = useState({})

    useEffect(()=>{
        (async()=>{
            try{
                const response = await fetch("/products.json")
                const products = await response.json()
                const productFind = products.find(product => product.id == productId)
                setProduct(productFind)
            } catch(error){
                console.log(error)
            }
        })()
    },[])

    return(
        <div>
            <img src={product.image} alt={product.title} />
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <ButtonPrimary>
                    <ShoppingBasket />
                    Añadir al Carrito
            </ButtonPrimary>
        </div>
    )
}

export default ProductDetail