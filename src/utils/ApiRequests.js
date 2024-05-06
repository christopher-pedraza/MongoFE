import axios from "axios";

import { getFromLocalStorage } from "./Storage";

/*
EJEMPLOS DE USO:

=================================================================GET=======================================================================

import React, { useState, useEffect } from "react";
import { get } from "./Database";

function MyComponent() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        get("data")
            .then((result) => {
                setData(result);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("An error occurred:", error);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    return <div>CARGADO!!</div>;
}

export default MyComponent;

=================================================================POST=======================================================================

import React, { useState, useEffect } from "react";
import { post } from "./Database";

function MyComponent() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        post("data", { name: "John" })
            .then((result) => {
                setData(result);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("An error occurred:", error);
                setIsLoading(false);
            });
    }, []);
            
    if (isLoading) {
        return <div>Cargando...</div>;
    }
    
    return <div>CARGADO!!</div>;
}
  
export default MyComponent;

*/

// export const API_URL =
// "https://tarea2-integracion-fullstack.azurewebsites.net/api/";
export const API_URL = "/api/";
// export const API_URL = "http://localhost:3001/api/";

async function apiRequest(
    method,
    url,
    data = null,
    requiresAuth = true,
    successActions = () => {},
    errorActions = () => {}
) {
    try {
        const options = {
            method,
            url: API_URL + url,
            headers: {
                "Content-Type": "application/json",
                Accept: "*/*",
            },
        };

        if (data !== null) {
            options.data = data;
        }
        if (requiresAuth) {
            options.headers.Authorization = `Bearer ${getFromLocalStorage(
                "token"
            )}`;
        }

        const response = await axios(options);

        successActions();
        return response.data;
    } catch (error) {
        errorActions();
        throw error;
    }
}

/**
 * GET
 * @param {*} url dirección a la que se hará la petición
 * @param {string} url dirección a la que se hará la petición
 * @param {boolean} requiresAuth indica si la petición requiere autenticación
 * @param {function} successActions función que se ejecutará si la petición es exitosa
 * @param {function} errorActions función que se ejecutará si la petición falla
 * @returns la respuesta de la petición
 */
export function get(
    url,
    requiresAuth,
    successActions = () => {},
    errorActions = () => {}
) {
    return apiRequest(
        "GET",
        url,
        null,
        requiresAuth,
        successActions,
        errorActions
    );
}

/**
 * POST
 * @param {string} url dirección a la que se hará la petición
 * @param {Object} data información que se enviará en la petición
 * @param {boolean} requiresAuth indica si la petición requiere autenticación
 * @param {function} successActions función que se ejecutará si la petición es exitosa
 * @param {function} errorActions función que se ejecutará si la petición falla
 * @returns la respuesta de la petición
 */
export function post(
    url,
    data,
    requiresAuth,
    successActions = () => {},
    errorActions = () => {}
) {
    return apiRequest(
        "POST",
        url,
        data,
        requiresAuth,
        successActions,
        errorActions
    );
}

/**
 * PUT
 * @param {string} url dirección a la que se hará la petición
 * @param {Object} data información que se enviará en la petición
 * @param {boolean} requiresAuth indica si la petición requiere autenticación
 * @param {function} successActions función que se ejecutará si la petición es exitosa
 * @param {function} errorActions función que se ejecutará si la petición falla
 * @returns la respuesta de la petición
 */
export function put(
    url,
    data,
    requiresAuth,
    successActions = () => {},
    errorActions = () => {}
) {
    return apiRequest(
        "PUT",
        url,
        data,
        requiresAuth,
        successActions,
        errorActions
    );
}

/**
 * DELETE
 * @param {string} url dirección a la que se hará la petición
 * @param {boolean} requiresAuth indica si la petición requiere autenticación
 * @param {function} successActions función que se ejecutará si la petición es exitosa
 * @param {function} errorActions función que se ejecutará si la petición falla
 * @returns la respuesta de la petición
 */
export function del(
    url,
    requiresAuth,
    successActions = () => {},
    errorActions = () => {}
) {
    return apiRequest(
        "DELETE",
        url,
        null,
        requiresAuth,
        successActions,
        errorActions
    );
}
