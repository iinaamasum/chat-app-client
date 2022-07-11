import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Auth/Login.jsx';
import Home from './Pages/Home/Home.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
