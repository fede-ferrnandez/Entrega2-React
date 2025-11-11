import './App.css'
import CartDetail from './Pages/CartDetail'
import ProductDetail from './Pages/ProductDetail'
import Products from './Pages/Products'
import { BrowserRouter, Routes, Route } from 'react-router'
import Contacto from './Pages/Contact'

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Products/>} />
                    <Route path="/product-detail/:productId" element={<ProductDetail/>} />
                    <Route path="/cart-detail" element={<CartDetail/>} />
                    <Route path="/contact" element={<Contacto/>} />
                </Routes>
            </BrowserRouter>
        </div>
            
    )
}

export default App