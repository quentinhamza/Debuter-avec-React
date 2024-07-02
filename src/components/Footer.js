// src/components/Footer.js
import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

	const handleInput = (e) => {
		setInputValue(e.target.value)
	}

	const handleBlur = () => {
		if (!inputValue.includes('@')) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.")
		}
	}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<input
				type='email'
				placeholder='Entrez votre email'
				value={inputValue}
				onChange={handleInput}
				onBlur={handleBlur}
			/>
		</footer>
	)
}

export default Footer