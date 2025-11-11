import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';

function ItemListContainer({ selectedCategory }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
    (async () => {
        try {
        const response = await fetch('/products.json');
        const data = await response.json();
        setProducts(data);
        } catch (error) {
        console.error("Error al cargar productos:", error);
        }
    })();
    }, []);

    const filteredProducts = selectedCategory
    ? products.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase())
    : products;


    return (
    <div className="itemListContainer">
        {filteredProducts.length > 0 
        ? (filteredProducts.map((product) => (<ItemDetail key={product.id} product={product} />))) 
        : (<p>No se encontraron productos.</p>)}
    </div>
    );
}

export default ItemListContainer;
