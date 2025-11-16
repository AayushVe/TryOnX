import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Generate from './pages/Generate'
import Sketch from './pages/Sketch'
import TryOn from './pages/TryOn'
import Chat from './pages/Chat'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/sketch" element={<Sketch />} />
        <Route path="/tryon" element={<TryOn />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  )
}

export default App

