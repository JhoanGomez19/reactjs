import Item from "./item"




const itemList = ({ products }) => {
    return (
        <div>
             {
            products.map( (product) => (
                <Item key ={product.id}  product={product} />
              )) 
            }
        </div>
    )
}

export default itemList