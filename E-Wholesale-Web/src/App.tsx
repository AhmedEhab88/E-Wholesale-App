import Layout from './components/Layout/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Retailers from './pages/Retailers/Retailers';
import Inventory from './pages/Inventory/Inventory';
import Representatives from './pages/Users/Users';
import Home from './pages/Home/Home';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import AddItem from './pages/AddItem/AddItem';
import AddRetailer from './pages/AddRetailer/AddRetailer';
import AddRepresentative from './pages/AddUser/AddUser';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="inventory" element={<Inventory />} />
                    <Route path="inventory/add" element={<AddItem />} />
                    <Route path="retailers" element={<Retailers />} />
                    <Route path="retailers/add" element={<AddRetailer />} />
                    <Route path="users" element={<Representatives />} />
                    <Route path="users/add" element={<AddRepresentative />} />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
