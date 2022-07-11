import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Auth/Login.jsx';
import Register from './Pages/Auth/Register.jsx';
import ResetPass from './Pages/Auth/ResetPass.jsx';
import Home from './Pages/Home/Home.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-pass" element={<ResetPass />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
