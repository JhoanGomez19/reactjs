import './itemlistcontainer.css';
import { useEffect ,useState } from 'react';
import getProducts from '../data/data';
import ItemList from './itemList';





// import './itemlistcontainer.css'


const ItemListContainer = ({saludo}) => {

        const [products, setProducts] = useState([])
   
        useEffect( () => {
            getProducts()
            .then ((respuesta) => {
                setProducts(respuesta)
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                console.log('Finalizo la promesa');
            });
        }, []);

       

    return (
        <div>
            <p>{saludo}</p>
            <ItemList products = {products} />
                
        </div>
        
    );
}

export default ItemListContainer