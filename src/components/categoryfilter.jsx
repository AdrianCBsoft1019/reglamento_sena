const CategoryFilter = ({ categories, onCategoryChange }) => {
    return (
        <div className="md:w-1/4 min-w-[180px]">
            <label htmlFor="category-select" className="block text-sm font-medium text-gray-700 mb-1">
            
            </label>
            <select
                id="category-select"
                onChange={onCategoryChange}
                className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none transition duration-150 cursor-pointer"
                aria-label="Seleccionar categoría para filtrar normas"
            >
                {categories.map(category => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CategoryFilter;