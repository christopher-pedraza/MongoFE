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
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        get("productos", true).then((response) => {
            setProductos(response);
        });
    }, []);

    return (
        <div>
            <h1>Productos</h1>
            <ProductList productos={productos} />
            <ProductInput productos={productos} setProductos={setProductos} />
        </div>
    );
}

export default Products;
