import { Button } from "@nextui-org/react";

import { clearLocalStorage } from "../../../../utils/Storage";

function Header() {
    const handleLogout = () => {
        clearLocalStorage();
        window.location.reload();
    };

    return (
        <header className="text-gray-400 bg-gray-900 body-font mb-8">
            <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center justify-between">
                <div></div> {/* Placeholder for left side content */}
                <Button
                    className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 text-white"
                    onPress={handleLogout}
                >
                    Cerrar sesion
                </Button>
            </div>
        </header>
    );
}

export default Header;
