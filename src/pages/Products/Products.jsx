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
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        get("productos", true).then((response) => {
            setProductos(response);
        });
    }, [refresh]);

    return (
        <div className="bg-gray-900 h-screen">
            <h1 className="text-white text-center">Productos</h1>
            <ProductInput productos={productos} setRefresh={setRefresh} />
            <ProductList productos={productos} setRefresh={setRefresh} />
        </div>
    );
}

export default Products;
