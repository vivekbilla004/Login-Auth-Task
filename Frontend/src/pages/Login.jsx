import { FiUser, FiLock } from "react-icons/fi";
import { useState } from "react";
import { loginUser } from "../api";
import { useNavigate, Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      const res = await loginUser(form);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#7ff0ea] text-[#1f2a44] px-10 py-2 mt-2 rounded-md font-bold tracking-widest shadow-md z-10">
        SIGN IN
      </div>

    
      <div className="h-32 bg-gradient-to-b from-[#2c3b5a] to-[#1f2a44] rounded-t-xl relative flex justify-center items-end pb-4">
          <div className="absolute bottom-0 w-[120%] h-1/2 bg-[#1f2a44] rounded-t-[100%]"></div>
      </div>

    
      <div className="flex justify-center -mt-10 relative z-10">
        <div className="w-24 h-24 rounded-full bg-[#3a4b70] border-[6px] border-[#1f2a44] flex items-center justify-center shadow-inner">
          <FiUser className="text-[#8f9ab3] text-4xl stroke-[1.5]"/>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-8 pt-6 space-y-5">
        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-400 text-sm px-3 py-2 rounded text-center">
            {error}
          </div>
        )}

        <div className="flex items-center bg-[#2c3b5a] rounded-md px-4 py-3.5 transition-all focus-within:ring-2 focus-within:ring-[#7ff0ea]/50">
          <FiUser className="text-[#8f9ab3] text-lg"/>
          <input
            type="email"
            name="email"
            required
            placeholder="Email Address"
            onChange={handleChange}
            className="ml-3 w-full bg-transparent outline-none text-white placeholder-[#8f9ab3] text-sm"
          />
        </div>

        <div className="flex items-center bg-[#2c3b5a] rounded-md px-4 py-3.5 transition-all focus-within:ring-2 focus-within:ring-[#7ff0ea]/50">
          <FiLock className="text-[#8f9ab3] text-lg"/>
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            onChange={handleChange}
            className="ml-3 w-full bg-transparent outline-none text-white placeholder-[#8f9ab3] text-sm"
          />
        </div>

        <div className="flex justify-between items-center text-xs text-[#7ff0ea] px-1">

          <a href="#" className="hover:text-white transition-colors">Forgot password?</a>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-4 bg-[#7ff0ea] hover:bg-[#68d8d2] text-[#1f2a44] py-3.5 rounded-md font-bold tracking-widest shadow-[0_4px_14px_0_rgba(127,240,234,0.3)] transition-all disabled:opacity-50"
        >
          {loading ? "AUTHENTICATING..." : "LOGIN"}
        </button>

        <p className="text-center text-[#8f9ab3] text-sm pt-2">
          No account? <Link to="/register" className="text-[#7ff0ea] hover:text-white transition-colors underline hover:underline-offset-2">Register here</Link>
        </p>
      </form>
    </AuthLayout>
  );
}