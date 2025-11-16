import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Sparkles, Menu, X, LogOut } from 'lucide-react'
import { useState } from 'react'

function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { path: '/home', label: 'Home' },
    { path: '/generate', label: 'Generate' },
    { path: '/sketch', label: 'Sketch' },
    { path: '/tryon', label: 'Try-On' },
    { path: '/chat', label: 'AI Assistant' },
  ]

  const handleSignOut = () => {
    navigate('/signin');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/10 dark:bg-gray-900/10 border-b border-white/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/home" className="flex items-center space-x-2 group">
            <div className="relative">
              <Sparkles className="w-8 h-8 text-indigo-500 group-hover:text-indigo-400 transition-colors" />
              <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              TryOnX
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-lg transition-all duration-200 ${
                    location.pathname === item.path
                      ? 'bg-white/20 text-white backdrop-blur-sm'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <button
              onClick={handleSignOut}
              className="ml-6 p-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10"
              aria-label="Sign out"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg transition-all ${
                  location.pathname === item.path
                    ? 'bg-white/20 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => {
                handleSignOut();
                setIsOpen(false);
              }}
              className="w-full text-left px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 flex items-center"
            >
              <LogOut className="w-5 h-5 mr-3" />
              Sign Out
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
