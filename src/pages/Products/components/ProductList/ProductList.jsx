import ProductItem from "./components/ProductItem/ProductItem";

function ProductList() {
    // Lista de productos con "producto", "precio" e "imagen" donde imagen es
    // una imagen placeholder de https://dummyimage.com/300x200/000/292929
    const productos = [
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
    ];

    return (
        <section class="text-gray-400 bg-gray-900 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                    {productos.map((producto) => (
                        <ProductItem key={producto.id} producto={producto} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProductList;
