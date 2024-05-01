import { useState, useEffect } from "react";
import "./App.css";
import Notification from "./components/Notificactions";
import InputArea from "./InputArea";
import ListArea from "./ListArea";
import loginService from "./services/login";

// pages
import Login from "./pages/Login.jsx";

//Listado temporal de productos
const productos = [
    {
        id: 1,
        producto: "Microprocesador i3",
        precio: 120,
    },
];

function App() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem("loggedAppUser");
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON);
            setUser(user);
        }
    }, []);

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const user = await loginService.login({
                username,
                password,
            });

            window.localStorage.setItem("loggeAppUser", JSON.stringify(user));

            setUser(user);
            setUsername("");
            setPassword("");
        } catch (exception) {
            setErrorMessage("Wrong credentials");
            setUsername("");
            setPassword("");
            setTimeout(() => {
                setErrorMessage(null);
            }, 3000);
        }
    };

    const productsForm = () => (
        <div className="container mt-5">
            <ListArea productos={productos} />
            <InputArea productos={productos} />
        </div>
    );

    const loginForm = () => (
        <div className="container">
            <Notification mensaje={errorMessage} />
            <form onSubmit={handleLogin}>
                <div>
                    username
                    <input
                        type="text"
                        value={username}
                        name="Username"
                        onChange={({ target }) => setUsername(target.value)}
                    />
                </div>
                <div>
                    password
                    <input
                        type="password"
                        value={password}
                        name="Password"
                        onChange={({ target }) => setPassword(target.value)}
                    />
                </div>
                <button type="submit">login</button>
            </form>
        </div>
    );

    return (
        <>
            {/*{user === null && loginForm()}
      {user !== null && productsForm()} */}

            {user === null ? (
                <Login />
            ) : (
                <div>
                    <p>{user.name} logged-in</p>
                    {productsForm()}
                </div>
            )}
        </>
    );
}

export default App;
