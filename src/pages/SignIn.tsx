import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { Sparkles } from 'lucide-react';

const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
    <path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.75 8.36,4.73 12.19,4.73C14.03,4.73 15.6,5.33 16.89,6.56L19.33,4.11C17.43,2.36 15,1.5 12.19,1.5C6.92,1.5 2.71,5.92 2.71,12C2.71,18.08 6.92,22.5 12.19,22.5C17.6,22.5 21.5,18.33 21.5,12.33C21.5,11.8 21.45,11.45 21.35,11.1Z"/>
  </svg>
);

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signing in with:', email, password);
    navigate('/home');
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/home');
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };

  return (
    <div className="flex w-full h-screen">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-white p-8">
        <div className="w-full max-w-sm">
            <div className='flex items-center justify-center space-x-3 mb-4'>
                <Sparkles className="w-12 h-12 text-indigo-400" />
                <span className="text-4xl font-light bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  TryOnX
                </span>
            </div>
          <h2 className="text-3xl font-bold text-center mb-2">Welcome back</h2>
          <p className="text-center text-gray-600 mb-8">Welcome back! Please enter your details.</p>
          
          <form onSubmit={handleSignIn} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500" />
                <label htmlFor="remember" className="ml-2 text-gray-700">Remember for 30 days</label>
              </div>
              <a href="#" className="font-medium text-purple-600 hover:text-purple-500">Forgot password</a>
            </div>
            
            <button
              type="submit"
              className="w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Sign in
            </button>
          </form>

          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center mt-4 py-2 px-4 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            <GoogleIcon />
            Sign in with Google
          </button>

          <p className="text-center text-sm text-gray-600 mt-8">
            Don't have an account?{' '}
            <button onClick={() => navigate('/signup')} className="font-medium text-purple-600 hover:text-purple-500">
              Sign up
            </button>
          </p>
        </div>
      </div>
      <div className="w-1/2 h-full hidden lg:block">
        <img src="/Glowing in Iridescence_ A Dress That Shines with Light.jpg" alt="Abstract background" className="w-full h-full object-cover object-top" />
      </div>
    </div>
  );
}

export default SignIn;
