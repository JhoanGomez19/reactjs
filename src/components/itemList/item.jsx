const item = ({ product }) => {
    return (
        <div >
            <img className="image-item" src={product.image} />
            <p>{product.name}</p>
        </div>
    )
}

export default item