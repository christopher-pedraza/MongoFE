import { useState, useEffect } from "react";
import "./App.css";
import InputArea from "./InputArea";
import ListArea from "./ListArea";

// pages
import Login from "./pages/Login/Login";
import Products from "./pages/Products/Products";

//Listado temporal de productos
const productos = [
    {
        id: 1,
        producto: "Microprocesador i3",
        precio: 120,
    },
];

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const username = window.localStorage.getItem("username");
        if (username) {
            setUser(username);
        }
    }, []);

    const productsForm = () => (
        <div className="container mt-5">
            <ListArea productos={productos} />
            <InputArea productos={productos} />
        </div>
    );

    return (
        <>
            {/*{user === null && loginForm()}
      {user !== null && productsForm()} */}

            {user === null ? (
                <Login setUser={setUser} />
            ) : (
                <div>
                    <Products />
                </div>
            )}
        </>
    );
}

export default App;
