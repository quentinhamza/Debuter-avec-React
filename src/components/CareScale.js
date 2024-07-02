// src/components/CareScale.js
import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

const quantityLabel = {
	1: 'peu',
	2: 'modérement',
	3: 'beaucoup'
}

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType = careType === 'light' ? (
		<img src={Sun} alt='sun-icon' />
	) : (
		<img src={Water} alt='water-icon' />
	)

	const handleClick = () => {
		const careText = careType === 'light' ? 'de lumière' : "d'arrosage"
		alert(`Cette plante requiert ${quantityLabel[scaleValue]} ${careText}`)
	}

	return (
		<div onClick={handleClick}>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale