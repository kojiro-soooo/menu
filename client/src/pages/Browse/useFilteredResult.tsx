import { useEffect, useState } from "react";
import RecipeType from "../../../types/recipe-type";

const useFilteredResult = ( allRecipes: Array<RecipeType>, country:string ) => {
    const [search, setSearch] = useState(country);
    const [filteredResult, setFilteredResult] = useState<RecipeType[]>([]);

    useEffect(() => {
        const filtered: Array<RecipeType> = allRecipes.filter((recipe) => {
            return recipe.country.startsWith(search.toLowerCase());
        });
        setFilteredResult(filtered);
    }, [search, allRecipes]);

    return {search, filteredResult, setSearch}
};

export default useFilteredResult;