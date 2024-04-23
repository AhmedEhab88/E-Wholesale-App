import { Link, Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div>
            <nav className="flex justify-between items-center w-[80%] mx-auto mt-2">
                <div>
                    <Link to="/">E-WholeSale</Link>
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
                                Representatives
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="w-[80%] mx-auto mb-10">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
