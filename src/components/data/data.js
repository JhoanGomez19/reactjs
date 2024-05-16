

const products = [
    {
        id: 'Axasd1231', 
        name: 'producto 1',
        descripcion: 'Descripcion',
        price: 1200,
        stock: 5,
        categoria: 'survival',
        image: '/image/resident-evil4.jfif',
    },
    {
        id: 'Axass123', 
        name: 'prducto 2',
        descripcion: 'Descripcion 2',
        price: 122,
        stock: 1,
        categoria: 'survival',
        image: '/image/resident-evil4.jfif',
    }

]


// Obtener productos
const getProducts = () => {
    return new Promise((resolve, reject) => {
        // Simulamos un retraso de red
        setTimeout(() => {
            resolve(products)
        }, 3000);  
    });

}

export default getProducts;