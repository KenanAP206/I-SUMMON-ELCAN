import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserRoot from './Pages/User/UserRoot';
import Home from './Pages/User/Home'
import Details from './Pages/User/Details'
import NotFound from './Pages/User/Not Found'
import Rooms from './Pages/User/Rooms'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<UserRoot />}>
          <Route index element={<Home />} />
          <Route path=':id' element={<Details />} />
          <Route path='/*' element={<NotFound />} />
          <Route path='/rooms' element={<Rooms />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;