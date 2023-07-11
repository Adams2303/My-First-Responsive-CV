import Product from "./Product_item"
function Product_list() {
    var list = [
        {
            name: 'product 1',
            description: 'description of product 1 '
        },
        {
            name: 'product 2',
            description: 'description of product 2'
        },
        {

            name: 'product 3 ',
            description: 'description of product 3'
        }
    ]

    return (
        <div className="products" style={{ display: 'flex', padding: '16px', width: '95vw', margin: 'auto', backgroudColor: 'gray' }}>
            {list.map(item => <Product name={item.name} description={item.description} />)}
        </div>
    )
}

export default Product_list