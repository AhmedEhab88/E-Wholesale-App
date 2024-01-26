import { Outlet } from 'react-router-dom';
import style from './Layout.module.css';

function Layout() {
    return (
        <div className={style.topnav}>
            <div className={style.logo}>E-WholeSale</div>

            <a className={style.active} href="#home">
                Home
            </a>
            <a href="#inventory">Inventory</a>
            <a href="#users">Users</a>
            <a href="#retailers">Retailers</a>

            <Outlet />
        </div>
    );
}

export default Layout;
