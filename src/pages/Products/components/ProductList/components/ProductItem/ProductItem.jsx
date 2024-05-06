import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

import { useState } from "react";

import { put, del } from "../../../../../../utils/ApiRequests";
import { getFromLocalStorage } from "../../../../../../utils/Storage";

function ProductItem({ productoActual, setRefresh }) {
    const { content, id } = productoActual;
    const { producto, precio, imagen } = content;
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [nuevoNombre, setNuevoNombre] = useState(producto);
    const [nuevoPrecio, setNuevoPrecio] = useState(precio);
    const [nuevaImagen, setNuevaImagen] = useState(imagen);

    const handleEdit = () => {
        if (nuevoNombre === "" || !nuevoNombre) {
            setNuevoNombre(producto);
        }
        if (nuevoPrecio === "" || !nuevoPrecio) {
            setNuevoPrecio(precio);
        }
        if (nuevaImagen === "" || !nuevaImagen) {
            setNuevaImagen(imagen);
        }
        put(`productos/${id}`, {
            content: {
                producto: nuevoNombre,
                precio: nuevoPrecio,
                imagen: nuevaImagen,
            },
        }).then(() => {
            onOpenChange();
            setRefresh((prev) => !prev);
        });
    };

    const handleDelete = () => {
        del(`productos/${id}`).then(() => {
            setRefresh((prev) => !prev);
        });
    };

    return (
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
                <img
                    alt="Imagen del producto"
                    className="object-cover object-center w-full h-full block"
                    src={imagen}
                />
            </a>
            <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    Producto
                </h3>
                <h2 className="text-white title-font text-lg font-medium">
                    {producto}
                </h2>
                <p className="mt-1">${precio}</p>
            </div>

            {getFromLocalStorage("rol") === "admin" ? (
                <div className="mt-4">
                    <Button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onPress={onOpen}
                    >
                        Editar
                    </Button>
                    <Button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4"
                        onPress={handleDelete}
                    >
                        Delete
                    </Button>
                </div>
            ) : null}
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                Editar producto
                            </ModalHeader>
                            <ModalBody>
                                <Input
                                    autoFocus
                                    label="Nombre"
                                    placeholder="Nuevo nombre"
                                    variant="bordered"
                                    value={nuevoNombre}
                                    onChange={(e) =>
                                        setNuevoNombre(e.target.value)
                                    }
                                />
                                <Input
                                    label="Precio"
                                    placeholder="Nuevo precio"
                                    variant="bordered"
                                    type="number"
                                    value={nuevoPrecio}
                                    onChange={(e) =>
                                        setNuevoPrecio(e.target.value)
                                    }
                                />
                                <Input
                                    label="Imagen"
                                    placeholder="Nueva imagen"
                                    variant="bordered"
                                    value={nuevaImagen}
                                    onChange={(e) =>
                                        setNuevaImagen(e.target.value)
                                    }
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="danger"
                                    variant="light"
                                    onPress={onClose}
                                >
                                    Cancelar
                                </Button>
                                <Button color="primary" onPress={handleEdit}>
                                    Confirmar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}

export default ProductItem;
