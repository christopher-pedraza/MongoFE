function ProductItem({ producto }) {
    return (
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
                <img
                    alt="Imagen del producto"
                    className="object-cover object-center w-full h-full block"
                    src={producto.imagen}
                />
            </a>
            <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    Producto
                </h3>
                <h2 className="text-white title-font text-lg font-medium">
                    {producto.producto}
                </h2>
                <p className="mt-1">${producto.precio}</p>
            </div>
            <div className="mt-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Edit
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4">
                    Delete
                </button>
            </div>
        </div>
    );
}

export default ProductItem;
