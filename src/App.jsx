import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserRoot from './Pages/User/UserRoot';
import Home from './Pages/User/Home'
import Details from './Pages/User/Details'
import NotFound from './Pages/User/Not Found'
import Rooms from './Pages/User/Rooms'
import AdminRoot from './Pages/Admin/AdminRoot'
import AdminDashboard from './Pages/Admin/Dashboard'
import UserList from './Pages/Admin/UserList'
import Bookings from './Pages/Admin/Bookings'
import AdminRooms from './Pages/Admin/AdminRooms'
import AddUser from './Pages/Admin/UserList/AddUser'
import EditUser from './Pages/Admin/UserList/EditUser'
import AddBooking from './Pages/Admin/Bookings/AddBooking'
import EditBooking from './Pages/Admin/Bookings/EditBooking'
import AddRooms from './Pages/Admin/AdminRooms/AddRooms'
import EditRooms from './Pages/Admin/AdminRooms/EditRooms'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<UserRoot />}>
          <Route index element={<Home />} />
          <Route path='rooms/:id' element={<Details />} />
          <Route path='/*' element={<NotFound />} />
          <Route path='/rooms' element={<Rooms />} />
        </Route>
        
        <Route path='/admin' element={<AdminRoot />}>
          <Route index element={<AdminDashboard />} />
          <Route path='dashboard' element={<AdminDashboard />} />
          <Route path='user-list' element={<UserList />} />
          <Route path='user-list/add' element={<AddUser />} />
          <Route path='user-list/edit/:id' element={<EditUser />} />
          <Route path='bookings' element={<Bookings />} />
          <Route path='bookings/add' element={<AddBooking />} />
          <Route path='bookings/edit/:id' element={<EditBooking />} />
          <Route path='rooms' element={<AdminRooms />} />
          <Route path='rooms/add' element={<AddRooms />} />
          <Route path='rooms/edit/:id' element={<EditRooms />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;