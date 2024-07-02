import { useState, useEffect } from 'react'
import ShoppingList from './ShoppingList'
import Cart from './Cart'
import Footer from './Footer'
import Banner from './Banner'
import Header from './Header'
import logo from '../assets/logo.png'
import '../styles/Layout.css'

function App() {
	const savedCart = localStorage.getItem('cart')
	const [cart, setCart] = useState(savedCart ? JSON.parse(savedCart) : [])

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<Header cartValue={cart.length} />
			<Cart cart={cart} updateCart={setCart} />
			<ShoppingList cart={cart} updateCart={setCart} />
			<Footer />
		</div>
	)
}

export default App