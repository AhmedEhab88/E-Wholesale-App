import { Link, Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            <nav className="flex justify-between items-center w-[97%] mx-auto mt-2 font-sans">
                <div>
                    <Link to="/" className="">
                        E-WholeSale
                    </Link>
                </div>
                <div>
                    <ul className="flex items-center gap-[4vw]">
                        <li>
                            <Link
                                className="hover:text-gray-400"
                                to="/inventory"
                            >
                                Inventory
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="hover:text-gray-400"
                                to="/retailers"
                            >
                                Retailers
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-gray-400" to="/users">
                                Users
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <button className="flex items-center bg-sky-500 text-white px-4 py-2 rounded-full hover:bg-sky-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
                            />
                        </svg>
                        Sign In
                    </button>
                </div>
            </nav>

            <div>
                <Outlet />
            </div>

            <footer className="w-full h-[15%] bg-sky-400 fixed left-0 bottom-0 ">
                <div className="flex items-center justify-center h-full">
                    <ul className="flex gap-[2vw]">
                        <li>
                            <h1 className="text-white">About</h1>
                        </li>
                        <li>
                            <h2 className="text-white">Careers</h2>
                        </li>
                        <li>
                            <h2 className="text-white">Contact Us</h2>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    );
}

export default Layout;
