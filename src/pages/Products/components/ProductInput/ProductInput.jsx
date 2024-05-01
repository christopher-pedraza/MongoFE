// Hooks
import { useState } from "react";

// Estilos
import "./ProductInput.css";

function ProductInput({ productos, setProductos }) {
    const [nombreProducto, setNombreProducto] = useState("");
    const [precioProducto, setPrecioProducto] = useState("");
    const [imagenProducto, setImagenProducto] = useState("");

    const addItem = (event) => {
        event.preventDefault();
        const itemObject = {
            id: productos.length + 1,
            producto: nombreProducto,
            precio: precioProducto,
            imagen:
                imagenProducto || "https://dummyimage.com/300x200/000/292929",
        };
        setProductos(productos.concat(itemObject));
        setNombreProducto("");
        setPrecioProducto("");
        setImagenProducto("");
    };

    const handleItemChange = (event) => {
        console.log(event.target.value);
        setNewItem(event.target.value);
    };

    return (
        <section class="text-gray-400 bg-gray-900 body-font">
            <form onSubmit={addItem}>
                <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4">
                    <div className="relative sm:mb-0 flex-grow w-full">
                        <label
                            for="producto"
                            className="leading-7 text-sm text-gray-400"
                        >
                            Nombre del producto
                        </label>
                        <input
                            type="text"
                            id="producto"
                            name="producto"
                            className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            value={nombreProducto}
                            onChange={({ target }) =>
                                setNombreProducto(target.value)
                            }
                        />
                    </div>
                    <div className="relative sm:mb-0 flex-grow w-full">
                        <label
                            for="price"
                            className="leading-7 text-sm text-gray-400"
                        >
                            Precio
                        </label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            className="price-field w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            value={precioProducto}
                            onChange={({ target }) =>
                                setPrecioProducto(target.value)
                            }
                        />
                    </div>
                    <div className="relative sm:mb-0 flex-grow w-full">
                        <label
                            for="image"
                            className="leading-7 text-sm text-gray-400"
                        >
                            Imagen
                        </label>
                        <input
                            type="text"
                            id="image"
                            name="image"
                            className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            value={imagenProducto}
                            onChange={({ target }) =>
                                setImagenProducto(target.value)
                            }
                        />
                    </div>
                    <button className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
                        Agregar
                    </button>
                </div>
            </form>
        </section>
    );
}

export default ProductInput;
