import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Lock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const { login, register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isRegister) {
      const success = await register(email, password);
      if (!success) {
        setError('Email already in use or error occurred');
      } else {
        // Auto-login after successful registration
        await login(email, password);
      }
    } else {
      const success = await login(email, password);
      if (!success) {
        setError('Invalid email or password');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans selection:bg-black selection:text-white">
      <div className="w-full max-w-md bg-white border-4 border-black p-10 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative">
        <Link to="/" className="absolute -top-16 left-0 flex items-center gap-2 text-black font-black uppercase tracking-widest hover:-translate-x-2 transition-transform">
          <ArrowLeft className="w-6 h-6" />
          Назад на главную
        </Link>
        <div className="absolute -top-6 -left-6 w-12 h-12 bg-black flex items-center justify-center border-4 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <Lock className="w-6 h-6 text-white" />
        </div>
        
        <div className="flex flex-col items-center mb-10 mt-2">
          <h1 className="text-4xl font-black text-black uppercase tracking-widest text-center">System Access</h1>
          <div className="w-16 h-2 bg-black mt-4"></div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-black uppercase tracking-widest mb-2">Email / Identifier</label>
              <input
                type="email"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(''); }}
                className="w-full bg-gray-50 border-2 border-black p-4 text-black font-bold focus:outline-none focus:ring-4 focus:ring-black/20 transition-all uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none focus:translate-x-1 focus:translate-y-1 focus:shadow-none"
              />
            </div>
            
            <div>
              <label className="block text-xs font-bold text-black uppercase tracking-widest mb-2">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(''); }}
                className="w-full bg-gray-50 border-2 border-black p-4 text-black font-bold focus:outline-none focus:ring-4 focus:ring-black/20 transition-all tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none focus:translate-x-1 focus:translate-y-1 focus:shadow-none"
              />
            </div>
            
            {error && <div className="bg-black text-white p-4 font-bold uppercase tracking-widest text-sm border-l-8 border-red-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">{error}</div>}
          </div>
          
          <button type="submit" className="w-full bg-black text-white font-black p-5 uppercase tracking-widest text-xl border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] hover:bg-white hover:text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all mt-4">
            {isRegister ? 'Register' : 'Authenticate'}
          </button>
          
          <button type="button" onClick={() => {setIsRegister(!isRegister); setError('');}} className="w-full text-center font-bold text-sm underline hover:text-gray-500 uppercase">
            {isRegister ? 'Already have an account? Login' : 'Create new account'}
          </button>
        </form>
        
        <div className="mt-10 p-4 border-2 border-black bg-yellow-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h4 className="font-black uppercase tracking-widest text-sm mb-2 text-black">Demo Credentials</h4>
          <p className="text-black font-medium text-sm mb-1">Admin: Email <strong className="font-black">admin@example.com</strong> / Pass: <strong className="font-black">admin123</strong></p>
          <p className="text-black font-medium text-sm">User: Email <strong className="font-black">user@example.com</strong> / Pass: <strong className="font-black">user123</strong></p>
        </div>
      </div>
    </div>
  );
}
