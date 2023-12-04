import { useEffect, useState } from "react";
import { backend_url } from "../../config";

const useGetAllRecipes = () => {
    const [allRecipes, setAllRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            const response = await fetch(`${backend_url}/browse`, {
                method: "GET",
            });
            const json = await response.json();
            setAllRecipes(json);
        };
        fetchRecipes();
    }, []);
    return allRecipes
};

export default useGetAllRecipes;
