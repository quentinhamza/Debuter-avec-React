import '../styles/Categories.css'

function Categories({ setActiveCategories, categories, activeCategories }) {
	const handleCheckboxChange = (category) => {
		if (activeCategories.includes(category)) {
			setActiveCategories(activeCategories.filter((cat) => cat !== category))
		} else {
			setActiveCategories([...activeCategories, category])
		}
	}

	return (
		<div className='lmj-categories'>
			{categories.map((category) => (
				<div key={category}>
					<input
						type='checkbox'
						checked={activeCategories.includes(category)}
						onChange={() => handleCheckboxChange(category)}
					/>
					{category}
				</div>
			))}
			<button onClick={() => setActiveCategories([])}>Réinitialiser</button>
		</div>
	)
}

export default Categories