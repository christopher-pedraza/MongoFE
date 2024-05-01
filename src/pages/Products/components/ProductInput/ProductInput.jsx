function ProductInput() {
    return (
        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4">
            <div className="relative sm:mb-0 flex-grow w-full">
                <label
                    for="full-name"
                    className="leading-7 text-sm text-gray-400"
                >
                    Full Name
                </label>
                <input
                    type="text"
                    id="full-name"
                    name="full-name"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
            </div>
            <div className="relative sm:mb-0 flex-grow w-full">
                <label for="email" className="leading-7 text-sm text-gray-400">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
            </div>
            <button className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
                Button
            </button>
        </div>
    );
}

export default ProductInput;
