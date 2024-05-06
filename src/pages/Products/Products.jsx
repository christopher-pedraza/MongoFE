// Componentes
import ProductList from "./components/ProductList/ProductList";
import ProductInput from "./components/ProductInput/ProductInput";
import Header from "./components/Header/Header";

// Hooks
import { useEffect, useState } from "react";

// API requests
import { get } from "../../utils/ApiRequests";

// Storage
import { getFromLocalStorage } from "../../utils/Storage";

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
        <div className="bg-gray-900 min-h-screen">
            <Header />
            <h1 className="text-white text-center mb-4">Productos</h1>
            {getFromLocalStorage('rol')==='admin' ? (
                <ProductInput productos={productos} setRefresh={setRefresh} />
            ) : null}
            <ProductList productos={productos} setRefresh={setRefresh} />
        </div>
    );
}

export default Products;
