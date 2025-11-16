import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, Sparkles } from 'lucide-react';
import GlassPanel from '../components/GlassPanel';

// Simple Google Icon component
const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.75 8.36,4.73 12.19,4.73C14.03,4.73 15.6,5.33 16.89,6.56L19.33,4.11C17.43,2.36 15,1.5 12.19,1.5C6.92,1.5 2.71,5.92 2.71,12C2.71,18.08 6.92,22.5 12.19,22.5C17.6,22.5 21.5,18.33 21.5,12.33C21.5,11.8 21.45,11.45 21.35,11.1Z"/>
  </svg>
);


function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add actual sign-in logic here
    console.log('Signing in with:', email, password);
    // On successful sign-in, navigate to home
    navigate('/home');
  };

  const handleGoogleSignIn = () => {
    // TODO: Add Google Sign-in logic
    console.log('Signing in with Google');
    navigate('/home');
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-gray-50 via-indigo-50 to-indigo-950">
      {/* Animated Gradient Background from Home.tsx */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/50 via-purple-100/50 to-indigo-950/80"></div>
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-500/30 rounded-full blur-[120px]"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px]"
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-md"
      >
        <GlassPanel className="p-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
                <Sparkles className="w-8 h-8 text-indigo-400" />
                <span className="text-3xl font-light bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  TryOnX
                </span>
            </div>
            <h2 className="text-3xl font-light text-white">Welcome Back</h2>
            <p className="text-gray-400 font-light">Sign in to continue your journey in fashion tech.</p>
          </div>

          <form onSubmit={handleSignIn} className="space-y-6">
            {/* Email Input */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white/5 backdrop-blur-xl text-white font-light rounded-full border border-white/10 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all duration-300 py-3 pl-12 pr-4"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-white/5 backdrop-blur-xl text-white font-light rounded-full border border-white/10 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all duration-300 py-3 pl-12 pr-4"
              />
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full group relative px-8 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-medium rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30"
            >
              Sign In
            </motion.button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="w-full border-white/10" />
            <span className="px-4 text-gray-400 font-light">OR</span>
            <hr className="w-full border-white/10" />
          </div>

          {/* Google Sign-In Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center space-x-3 px-8 py-3 bg-white/5 backdrop-blur-xl text-white font-medium rounded-full border border-white/10 hover:bg-white/10 transition-all duration-300"
          >
            <GoogleIcon />
            <span>Sign in with Google</span>
          </motion.button>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-400 font-light">
              Don't have an account?{' '}
              <button onClick={() => navigate('/signup')} className="font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
                Sign Up
              </button>
            </p>
          </div>
        </GlassPanel>
      </motion.div>
    </div>
  );
}

export default SignIn;
