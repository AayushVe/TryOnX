import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Generate from './pages/Generate';
import Sketch from './pages/Sketch';
import TryOn from './pages/TryOn';
import Chat from './pages/Chat';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const AppContent = () => {
  const location = useLocation();
  const noNavRoutes = ['/signin', '/signup'];

  return (
    <>
      {!noNavRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Navigate to="/signin" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/sketch" element={<Sketch />} />
        <Route path="/tryon" element={<TryOn />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
