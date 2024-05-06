import axios from "axios";
const baseUrl =
    "http://tarea2-integracion-fullstack.azurewebsites.net/api/user";

const login = async (credentials) => {
    const response = await axios.post(baseUrl, credentials);
    return response.data;
};

/*
const login = async (credentials) => {
    post(
        "user/login",
        credentials,
        () => {},
        () => {},
        false
    )
        .then((response) => {
            return response;
        })
        .catch((error) => {
            throw error;
        });
};
*/

export default { login };
