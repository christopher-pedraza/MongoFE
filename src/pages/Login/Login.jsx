// Hooks
import { useState } from "react";

import loginService from "../../services/login";
import { saveToLocalStorage } from "../../utils/Storage";
import { post } from "../../utils/ApiRequests";

function Login({ setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);

    const handleLogin = async (event) => {
        event.preventDefault();
        post("user/login", { username: username, password: password }, false)
            .then((response) => {
                saveToLocalStorage("loggedAppUser", JSON.stringify(response));
                setUser(response);
                setUsername("");
                setPassword("");
            })
            .catch((error) => {
                setErrorMessage("Credenciales erroneas");
                setUsername("");
                setPassword("");
                setTimeout(() => {
                    setErrorMessage(null);
                }, 3000);
            });
    };

    return (
        <section className="text-gray-400 bg-gray-900 body-font h-screen content-center">
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                    <h1 className="title-font font-medium text-3xl text-white">
                        TechSpot
                    </h1>
                    <p className="leading-relaxed mt-4">
                        Innovación que transforma tu mundo.
                    </p>
                    <p className="leading-relaxed mt-4">
                        Explora la vanguardia tecnológica en nuestra tienda
                        digital. Conéctate con la innovación en cada clic.
                    </p>
                </div>
                <div className="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                    <h2 className="text-white text-lg font-medium title-font mb-5">
                        Iniciar sesión
                    </h2>
                    <form onSubmit={handleLogin}>
                        <div className="relative mb-4">
                            <label
                                for="Username"
                                className="leading-7 text-sm text-gray-400"
                            >
                                Usuario
                            </label>
                            <input
                                type="text"
                                value={username}
                                id="Username"
                                name="Username"
                                className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-900 rounded border border-gray-600 focus:border-green-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                onChange={({ target }) =>
                                    setUsername(target.value)
                                }
                            />
                        </div>
                        <div className="relative mb-4">
                            <label
                                for="password"
                                className="leading-7 text-sm text-gray-400"
                            >
                                Contraseña
                            </label>
                            <input
                                type="password"
                                value={password}
                                id="password"
                                name="password"
                                className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-900 rounded border border-gray-600 focus:border-green-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                onChange={({ target }) =>
                                    setPassword(target.value)
                                }
                            />
                        </div>

                        <button
                            type="submit"
                            className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg w-full"
                        >
                            Iniciar sesión
                        </button>
                    </form>
                    <p className="text-xs mt-3 text-red-500">{errorMessage}</p>
                </div>
            </div>
        </section>
    );
}

export default Login;
