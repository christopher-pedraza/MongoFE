import { post } from "../utils/ApiRequests";

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

export default { login };
