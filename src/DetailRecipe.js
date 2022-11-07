function DetailRecipe(props) {
    const { title, time, ingredients,steps } = props;

    return (
        <div className="ProductDetail">
            <div className="product">
                <h1>{title}</h1>
                <h2>Tempo de preparo: {time} min</h2>
                <h3>ingredientes: {ingredients}</h3>
                <h4>{steps}</h4>
            </div>
        </div>
    )
}

export default DetailRecipe;