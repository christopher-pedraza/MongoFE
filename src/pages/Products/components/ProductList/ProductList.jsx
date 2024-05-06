import ProductItem from "./components/ProductItem/ProductItem";

function ProductList({ productos, setRefresh }) {
    console.log("productos", productos);
    return (
        <section class="text-gray-400 bg-gray-900 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                    {productos.map((productoActual) => (
                        <ProductItem
                            key={productoActual.id}
                            productoActual={productoActual}
                            setRefresh={setRefresh}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProductList;
