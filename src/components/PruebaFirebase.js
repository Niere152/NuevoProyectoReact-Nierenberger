import { useEffect, useState } from 'react'; 
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const PruebaFirebase = () => {

    const [products, setProducts] = useState ([]);

    useEffect (() => {
        const db = getFirestore ();

        getDocs (collection (db, 'Items'))
            .then (snapshot => {
                const dataExtraida = snapshot.docs.map (datos => datos.data())
                setProducts (dataExtraida);
            })
                
    }, []);

    return (
        <div>
            <ul className='cardCatalogo'>
                {products.map (product => 
                    <li key={product.id}>
                        Producto: {product.title}<br></br>
                        Precio: U$D {product.price}<br></br>
                        Stock: {product.stock}
                        <img className='imgCatalogo' src={product.image} alt= {product.title}></img>
                    </li>)}
            </ul>
        </div>
    )

}






export default PruebaFirebase;