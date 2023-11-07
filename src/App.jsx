import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import { useAuth0 } from '@auth0/auth0-react'

function App () {
  const { isAuthenticated } = useAuth0()

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={isAuthenticated ? <MainPage /> : <LoginPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
