import { FiUser, FiLock, FiMail, FiCalendar } from "react-icons/fi";
import { useState } from "react";
import { registerUser } from "../api";
import { useNavigate, Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    dob: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await registerUser(form);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.message || "Registration failed. Try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#7ff0ea] text-[#1f2a44] px-10 py-2 mt-2 rounded-md font-bold tracking-widest shadow-md z-10">
        REGISTER
      </div>

      <div className="h-20 bg-gradient-to-b from-[#2c3b5a] to-[#1f2a44] rounded-t-xl"></div>
      <div className="flex justify-center -mt-10 relative z-10 pt-2">
        <div className="w-24 h-24 rounded-full bg-[#3a4b70] border-[6px] border-[#1f2a44] flex items-center justify-center shadow-inner">
          <FiUser className="text-[#8f9ab3] text-4xl stroke-[1.5]" />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-8 pt-4 space-y-4">
        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-400 text-sm px-3 py-2 rounded text-center">
            {error}
          </div>
        )}

        <div className="flex items-center bg-[#2c3b5a] rounded-md px-4 py-3 transition-all focus-within:ring-2 focus-within:ring-[#7ff0ea]/50">
          <FiUser className="text-[#8f9ab3] text-lg" />
          <input
            type="text"
            name="name"
            required
            placeholder="Full Name"
            onChange={handleChange}
            className="ml-3 w-full bg-transparent outline-none text-white placeholder-[#8f9ab3] text-sm"
          />
        </div>

        <div className="flex items-center bg-[#2c3b5a] rounded-md px-4 py-3 transition-all focus-within:ring-2 focus-within:ring-[#7ff0ea]/50">
          <FiCalendar className="text-[#8f9ab3] text-lg" />
          <input
            type="date"
            name="dob"
            required
            onChange={handleChange}
            className="ml-3 w-full bg-transparent outline-none text-white placeholder-[#8f9ab3] text-sm [color-scheme:dark]"
          />
        </div>

        <div className="flex items-center bg-[#2c3b5a] rounded-md px-4 py-3 transition-all focus-within:ring-2 focus-within:ring-[#7ff0ea]/50">
          <FiMail className="text-[#8f9ab3] text-lg" />
          <input
            type="email"
            name="email"
            required
            placeholder="Email Address"
            onChange={handleChange}
            className="ml-3 w-full bg-transparent outline-none text-white placeholder-[#8f9ab3] text-sm"
          />
        </div>

        <div className="flex items-center bg-[#2c3b5a] rounded-md px-4 py-3 transition-all focus-within:ring-2 focus-within:ring-[#7ff0ea]/50">
          <FiLock className="text-[#8f9ab3] text-lg" />
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            onChange={handleChange}
            className="ml-3 w-full bg-transparent outline-none text-white placeholder-[#8f9ab3] text-sm"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-6 bg-[#7ff0ea] hover:bg-[#68d8d2] text-[#1f2a44] py-3.5 rounded-md font-bold tracking-widest shadow-[0_4px_14px_0_rgba(127,240,234,0.3)] transition-all disabled:opacity-50"
        >
          {loading ? "CREATING..." : "REGISTER"}
        </button>

        <p className="text-center text-[#8f9ab3] text-sm pt-2">
          Already have an account?{" "}
          <Link
            to="/"
            className="text-[#7ff0ea] hover:text-white transition-colors underline hover:underline-offset-2"
          >
            Sign In
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
