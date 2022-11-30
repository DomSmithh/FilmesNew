import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from './pages/Home';
import Filme from './pages/Filme';
import Header from "./components/Header";
import Favoritos from "./pages/Favoritos";
import Login from './pages/Login'
import Register from './pages/Register'


import Erro from "./pages/Erro";

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path='register' element={<Register/>}/>
                <Route path="/" element={<Home/> }/>
                <Route path="/filme/:id" element={<Filme/>} /> 
                <Route path="/favoritos" element={<Favoritos/>}/>
                

                <Route path="*" element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default RoutesApp;