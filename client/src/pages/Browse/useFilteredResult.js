import { useEffect, useState } from "react";

const useFilteredResult = ( allRecipes, country ) => {
    const [search, setSearch] = useState(country);
    const [filteredResult, setFilteredResult] = useState([]);

    useEffect(() => {
        const filtered = allRecipes.filter((recipe) => {
            return recipe.country.startsWith(search.toLowerCase());
        });
        setFilteredResult(filtered);
    }, [search, allRecipes]);

    return {search, filteredResult, setSearch}
};

export default useFilteredResult;