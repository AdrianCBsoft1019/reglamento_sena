import { useState, useEffect } from 'react';

const SearchBar = ({ data = [], setFilteredData }) => {
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        const normalized = searchText.trim().toLowerCase();
        if (!normalized) {
            setFilteredData(data);
            return;
        }

        const filtered = data.filter((r) =>
            (r.title || '').toLowerCase().includes(normalized) ||
            (r.description || '').toLowerCase().includes(normalized)
        );

        setFilteredData(filtered);
    }, [searchText, data, setFilteredData]);

    return (
        <div className="flex-1 min-w-[200px]">
            <label htmlFor="search-input" className="sr-only">
                Buscar Norma por nombre o descripción
            </label>
            <div className="relative">
                <input
                    id="search-input"
                    type="text"
                    placeholder=" Buscar norma por nombre o descripción"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
                    aria-label="Campo de búsqueda de normas"
                />
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
            </div>
        </div>
    );
};

export default SearchBar;