import React from 'react'

function Categories({ categories, selectedCategory, setSelectedCategory }) {
    return (
        <div>
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                <option value="">Toutes les catégories</option>
                {categories.map((category, index) => (
                    <option key={index} value={category}>
                        {category}
                    </option>
                ))}
            </select>
            <button onClick={() => setSelectedCategory('')}>Réinitialiser</button>
        </div>
    )
}

export default Categories