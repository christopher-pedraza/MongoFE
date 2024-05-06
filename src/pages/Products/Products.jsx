// Componentes
import ProductList from "./components/ProductList/ProductList";
import ProductInput from "./components/ProductInput/ProductInput";

// Hooks
import { useEffect, useState } from "react";

// API requests
import { get } from "../../utils/ApiRequests";

function Products() {
    // Lista de productos con "producto", "precio" e "imagen" donde imagen es
    // una imagen placeholder de https://dummyimage.com/300x200/000/292929
    const [productos, setProductos] = useState([
        {
            id: 1,
            producto: "Microprocesador i3",
            precio: 120,
            imagen: "https://dummyimage.com/300x200/000/292929",
        },
        {
            id: 2,
            producto: "Microprocesador i5",
            precio: 200,
            imagen: "https://dummyimage.com/300x200/000/292929",
        },
        {
            id: 3,
            producto: "Microprocesador i7",
            precio: 300,
            imagen: "https://dummyimage.com/300x200/000/292929",
        },
        {
            id: 4,
            producto: "Microprocesador i9",
            precio: 400,
            imagen: "https://dummyimage.com/300x200/000/292929",
        },
        {
            id: 1,
            producto: "Microprocesador i3",
            precio: 120,
            imagen: "https://dummyimage.com/300x200/000/292929",
        },
        {
            id: 2,
            producto: "Microprocesador i5",
            precio: 200,
            imagen: "https://dummyimage.com/300x200/000/292929",
        },
        {
            id: 3,
            producto: "Microprocesador i7",
            precio: 300,
            imagen: "https://dummyimage.com/300x200/000/292929",
        },
        {
            id: 4,
            producto: "Microprocesador i9",
            precio: 400,
            imagen: "https://dummyimage.com/300x200/000/292929",
        },
    ]);

    useEffect(() => {
        get("products").then((response) => {
            setProductos(response.data);
        });
    }, [productos]);

    return (
        <div>
            <h1>Productos</h1>
            <ProductList productos={productos} />
            <ProductInput productos={productos} setProductos={setProductos} />
        </div>
    );
}

export default Products;
