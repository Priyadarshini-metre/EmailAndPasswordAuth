import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './EmailAndPasswordAuth/Home'
import Login from './EmailAndPasswordAuth/Login'
import Signup from './EmailAndPasswordAuth/Signup'
import PrivateRoute from './EmailAndPasswordAuth/PrivateRoute'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/home' element={
                        <PrivateRoute>
                            <Home />
                        </PrivateRoute>
                    } />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
