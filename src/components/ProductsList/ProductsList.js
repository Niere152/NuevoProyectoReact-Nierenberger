import './ProductsList.css';
import Item from "../Item/Item";

const ProductsList = ({products}) => {
    return (
        <div className="Product-List">
            {products.map(prod => <Item key={prod.id} {...prod}></Item>)}
        </div>
    )
}

export default ProductsList;