function AuthLayout({ children }) {
  return (
    <div className="w-full flex items-center justify-center p-4 bg-[#53d2c3] h-screen">
      <div className="w-full max-w-[400px] bg-[#1f2a44] rounded-xl shadow-2xl relative overflow-hidden ring-1 ring-white/10">
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;