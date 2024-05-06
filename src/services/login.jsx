import { post } from "../utils/ApiRequests";

const login = async (credentials) => {
    return await post("user/login", credentials);
};

export default { login };
