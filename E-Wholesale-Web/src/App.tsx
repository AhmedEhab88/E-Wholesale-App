import Layout from './components/Layout/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Retailers from './components/Retailers/Retailers';
import Inventory from './components/Inventory/Inventory';
import Users from './components/Users/Users';
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="inventory" element={<Inventory />} />
                    <Route path="retailers" element={<Retailers />} />
                    <Route path="users" element={<Users />} />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
