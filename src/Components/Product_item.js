function Product(props) {
    return (
        <div className="product">
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <button>Buy</button>
        </div>
    );
}

export default Product