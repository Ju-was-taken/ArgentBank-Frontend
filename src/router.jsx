import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import Profil from './pages/Profil'
import ErrorPage from './pages/ErrorPage'
import Layout from './components/Layout'



const AppRouter = () => {
    return (
        <BrowserRouter>
        
        


        <Routes>
            
                <Route path='/' element={<Layout />} >
                <Route index element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/profile' element={<Profil />} />
                <Route path="*" element={<ErrorPage />} />
            </Route>
        
        </Routes>


      
        </BrowserRouter>
    )
}




export default AppRouter