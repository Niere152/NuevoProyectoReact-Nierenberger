import grafitoLapiz from '../../assets/grafitoLapiz.jpg';
import carbonLapiz from '../../assets/carbonLapiz.jpg';
import colorLapiz from '../../assets/colorLapiz.jpg';
import grasaLapiz from '../../assets/grasaLapiz.jpg';
import acuarelaLapiz from '../../assets/acuarelaLapiz.jpg';

const products = [
    {
        id: '001',
        name: 'Lápiz de GRAFITO',
        price: '1,00',
        category: 'ELEMENTAL',
        img: grafitoLapiz,
        stock: 15,
        description: 'Esta mina está envuelta en arcilla y revestida con madera. El grafito aporta el color negro y la arcilla actúa como agente de unión, dando forma y resistencia a la mina. La calidad del lápiz es excelente.'
    },
    {
        id: '002',
        name: 'Lápiz de CARBÓN',
        price: '2,50',
        category: 'PROFESIONAL',
        img: carbonLapiz,
        stock: 25,
        description: 'Trazo de líneas mucho más negras. El carbón mezclado con hollín y arcilla otorga a los lápices carbón su color negro intenso. Madera procedente de una gestión forestal sostenible certificada FSC.'
    },
    {
        id: '003',
        name: 'Lápiz de COLOR',
        price: '3,50',
        category: 'ELEMENTAL',
        img: colorLapiz,
        stock: 30,
        description: 'Mina pigmentada en tonos vivos. Funda de madera cilíndrica milimétricamente tallada. Aglutinante de primera calidad, garantizando colores de brillo natural.'
    },
    {
        id: '004',
        name: 'Lápiz de GRASA',
        price: '5,00',
        category: 'PROFESIONAL',
        img: grasaLapiz,
        stock: 20,
        description: 'Núcleo hecho de cera suave y grasosa, revestido en papel. Cera de color endurecida. Recomendado en superficies duras, brillantes y sin porosidad.'
    },
    {
        id: '005',
        name: 'Lápiz de ACUARELA',
        price: '6,50',
        category: 'PROFESIONAL',
        img: acuarelaLapiz,
        stock: 25,
        description: 'De rápida dilusión en agua. Madera fina y mina sintética de excelente calidad, lo que asegura un brillo natural.'
    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (products)
        }, 500)
    })
}
export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId));
        }, 500);
    });
}
export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (products.filter (cat => cat.category === categoryId))
        }, 500)
    })
}
export default getProducts;