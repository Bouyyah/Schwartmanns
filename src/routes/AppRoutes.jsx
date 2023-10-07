import { Routes, Route,Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

import LoginPage from '../pages/LoginPage';
import UsersPage from '../pages/UsersPage';
import Dashboard from '../pages/Dashboard';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/' element={<Navigate to="/users" replace />}/>
      <Route path='/users' element={<ProtectedRoute ><UsersPage /></ProtectedRoute>}/>
      <Route path='/dashboard' element={<ProtectedRoute ><Dashboard /></ProtectedRoute>}/>

    </Routes>
  )
}

export default AppRoutes