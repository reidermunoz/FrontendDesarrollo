import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Users from '../pages/Users';
import Products from '../pages/Products';
import CreateUser from '../pages/CreateUser';


export default function RoutesProjects() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/products" element={<Products />} />
                <Route path="/create-user" element={<CreateUser />} />
            </Routes>
        </BrowserRouter>
    )
}