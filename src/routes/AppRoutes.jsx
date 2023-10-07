import { Routes, Route,Navigate } from 'react-router-dom';

import LoginPage from '../pages/LoginPage';



const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/' element={<Navigate to="/users" replace />}/>
    </Routes>
  )
}

export default AppRoutes