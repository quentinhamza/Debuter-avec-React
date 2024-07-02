// src/components/ShoppingList.js
import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'

function ShoppingList() {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div>
			<h2>Catégories de plantes</h2>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			
			<h2>Plantes à vendre</h2>
			<ul className='lmj-plant-list'>
				{plantList.map((plant) => (
					<PlantItem
						key={plant.id}
						id={plant.id}
						name={plant.name}
						cover={plant.cover}
						light={plant.light}
						water={plant.water}
					/>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList