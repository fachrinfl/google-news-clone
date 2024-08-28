const Menubar = () => {
    return (
        <div className="bg-white flex items-center justify-center shadow-md p-2 w-screen">
            <h1 className="ml-4 font-medium text-gray-500 text-base hover:text-black cursor-pointer">Home</h1>
            <h1 className="ml-7 font-medium text-gray-500 text-base hover:text-black cursor-pointer">For you</h1>
            <h1 className="ml-7 font-medium text-gray-500 text-base hover:text-black cursor-pointer">Following</h1>
            <h1 className="ml-7 text-gray-200">|</h1>
            <h1 className="ml-7 font-medium text-gray-500 text-base hover:text-black cursor-pointer">Indonesia</h1>
            <h1 className="ml-7 font-medium text-gray-500 text-base hover:text-black cursor-pointer">World</h1>
            <h1 className="ml-7 font-medium text-gray-500 text-base hover:text-black cursor-pointer">Local</h1>
            <h1 className="ml-7 font-medium text-gray-500 text-base hover:text-black cursor-pointer">Entertaiment</h1>
            <h1 className="ml-7 font-medium text-gray-500 text-base hover:text-black cursor-pointer">Sports</h1>
        </div>
    );
}

export default Menubar;