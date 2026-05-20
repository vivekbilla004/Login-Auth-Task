import { useNavigate } from 'react-router-dom';
import { FiSettings, FiXCircle, FiLogOut } from 'react-icons/fi';

export default function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

const tableData = [
    { id: 1, name: 'dil Patil', date: '01/15/2024', role: 'Admin', status: 'Active', avatar: 'https://i.pravatar.cc/150?img=11' },
    { id: 2, name: 'Aisha Rahman', date: '02/28/2024', role: 'Publisher', status: 'Active', avatar: 'https://i.pravatar.cc/150?img=5' },
    { id: 3, name: 'Marcus Chen', date: '03/10/2024', role: 'Publisher', status: 'Suspended', avatar: 'https://i.pravatar.cc/150?img=12' },
    { id: 4, name: 'Sarah Jenkins', date: '03/22/2024', role: 'Reviewer', status: 'Active', avatar: 'https://i.pravatar.cc/150?img=9' },
    { id: 5, name: 'David Osei', date: '04/05/2024', role: 'Moderator', status: 'Inactive', avatar: 'https://i.pravatar.cc/150?img=13' },
  ];

  const getStatusStyle = (status) => {
    switch(status) {
      case 'Active': return 'text-emerald-500 bg-emerald-500/10 border border-emerald-500/20';
      case 'Suspended': return 'text-rose-500 bg-rose-500/10 border border-rose-500/20';
      case 'Inactive': return 'text-amber-500 bg-amber-500/10 border border-amber-500/20';
      default: return 'text-gray-400 bg-gray-500/10';
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 mt-10">
      <div className="flex justify-between items-center mb-8 bg-[#1f2a44] p-5 rounded-xl shadow-lg ring-1 ring-white/5">
        <div>
          <h1 className="text-2xl font-bold text-white">Welcome, {user.name || 'User'}!</h1>
          <p className="text-[#8f9ab3] text-sm mt-1">Dashboard Overview</p>
        </div>
        <button 
          onClick={handleLogout}
          className="flex items-center gap-2 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 px-5 py-2.5 rounded-lg transition-colors font-medium border border-rose-500/20"
        >
          <FiLogOut className="text-lg" /> Logout
        </button>
      </div>

      <div className="bg-[#1f2a44] rounded-xl shadow-2xl overflow-hidden ring-1 ring-white/5">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-[#2c3b5a] text-[#8f9ab3] text-xs uppercase tracking-wider font-semibold">
                <th className="p-5 text-center w-16">#</th>
                <th className="p-5">Name</th>
                <th className="p-5">Date Created</th>
                <th className="p-5">Role</th>
                <th className="p-5">Status</th>
                <th className="p-5 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              {tableData.map((row) => (
                <tr key={row.id} className="hover:bg-[#2c3b5a]/50 transition-colors group">
                  <td className="p-5 text-center text-[#8f9ab3]">{row.id}</td>
                  <td className="p-5 flex items-center gap-4">
                    <img src={row.avatar} alt={row.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-[#2c3b5a]" />
                    <span className="font-medium text-white">{row.name}</span>
                  </td>
                  <td className="p-5 text-[#8f9ab3]">{row.date}</td>
                  <td className="p-5 text-[#8f9ab3]">{row.role}</td>
                  <td className="p-5">
                    <span className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center w-max gap-2 ${getStatusStyle(row.status)}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                      {row.status}
                    </span>
                  </td>
                  <td className="p-5">
                    <div className="flex items-center justify-center gap-4">
                      <button className="text-[#8f9ab3] hover:text-[#7ff0ea] transition-colors" title="Settings">
                        <FiSettings className="text-lg" />
                      </button>
                      <button className="text-[#8f9ab3] hover:text-rose-400 transition-colors" title="Delete">
                        <FiXCircle className="text-lg" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}