import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({name, img, category, description, price, stock}) => {
    return (
        <article className="card-detalles">
            <header>
                <h2>{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name}></img>
            </picture>
            <section>
                <p>Categoría: {category}</p>
                <p>Descripción: {description}</p>
                <p>Precio: {price}</p>
                <p>Stock disponible: {stock}</p>
            </section>
            <footer>
            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log ('Cantidad agregada ', quantity)}></ItemCount>
            </footer>
        </article>
    )
}

export default ItemDetail;