export default function Navbar() {
    return (
        <nav className="max-w-7xl mx-auto px-6 py-5 flex flex-col lg:flex-row items-center justify-between gap-6">

            {/* Logo */}
            <div className="logo">
                <img
                    src="brand_logo.png"
                    alt="Nike Logo"
                    className="w-16 md:w-20"
                />
            </div>

            {/* Navigation Links */}
            <ul className="flex flex-col sm:flex-row items-center gap-5 lg:gap-10 text-sm md:text-base font-medium">

                <li className="cursor-pointer hover:text-red-600 transition">
                    MENU
                </li>

                <li className="cursor-pointer hover:text-red-600 transition">
                    LOCATION
                </li>

                <li className="cursor-pointer hover:text-red-600 transition">
                    ABOUT
                </li>

                <li className="cursor-pointer hover:text-red-600 transition">
                    CONTACT
                </li>

            </ul>

            {/* Login Button */}
            <button className="bg-[#D01C28] text-white px-5 py-2 rounded-md hover:bg-red-700 transition duration-300">
                Login
            </button>

        </nav>
    );
}