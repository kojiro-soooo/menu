interface RecipeType {
    _id: number,
    userId: string,
    title: string,
    description: string,
    country: string,
    ingredients: Array<string>,
    instructions: Array<string>,
    totalTime: number,
    servings: number,
    authenticity: number,
    taste: number,
    complexity: number,
    author: string,
    tags: Array<string>,
    imageUrl: string
}

export default RecipeType;