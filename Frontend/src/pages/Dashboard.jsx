import { useNavigate } from "react-router-dom";
import { FiSettings, FiXCircle } from "react-icons/fi";

export default function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  const tableData = [
    {
      id: 1,
      name: "dil Patil",
      date: "01/15/2024",
      role: "Admin",
      status: "Active",
      avatar: "https://i.pravatar.cc/150?img=11",
    },
    {
      id: 2,
      name: "Aisha Rahman",
      date: "02/28/2024",
      role: "Publisher",
      status: "Active",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
      id: 3,
      name: "Marcus Chen",
      date: "03/10/2024",
      role: "Publisher",
      status: "Suspended",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: 4,
      name: "Sarah Jenkins",
      date: "03/22/2024",
      role: "Reviewer",
      status: "Active",
      avatar: "https://i.pravatar.cc/150?img=9",
    },
    {
      id: 5,
      name: "David Osei",
      date: "04/05/2024",
      role: "Moderator",
      status: "Inactive",
      avatar: "https://i.pravatar.cc/150?img=13",
    },
  ];

  const getStatusDot = (status) => {
    switch (status) {
      case "Active":
        return "bg-[#4caf50]"; 
      case "Suspended":
        return "bg-[#f44336]"; 
      case "Inactive":
        return "bg-[#ff9800]"; 
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f7fa] p-8 font-sans">
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold text-gray-700">Dashboard</h1>
        <button
          onClick={handleLogout}
          className="text-sm text-gray-500 hover:text-red-500 transition-colors font-medium"
        >
          Logout {user.name}
        </button>
      </div>

      <div className="max-w-6xl mx-auto bg-white rounded shadow-sm border border-gray-100 overflow-hidden pt-4 pb-6 px-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="text-[#566787] text-sm font-semibold border-b-2 border-gray-100">
                <th className="py-4 pl-4 w-12">#</th>
                <th className="py-4">Name</th>
                <th className="py-4">Date Created</th>
                <th className="py-4">Role</th>
                <th className="py-4">Status</th>
                <th className="py-4">Action</th>
              </tr>
            </thead>

            <tbody className="text-[15px] text-[#566787]">
              {tableData.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors"
                >
                  <td className="py-4 pl-4">{row.id}</td>
                  <td className="py-4 flex items-center gap-4">
                    <img
                      src={row.avatar}
                      alt={row.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="font-medium text-[#292b2c]">
                      {row.name}
                    </span>
                  </td>
                  <td className="py-4">{row.date}</td>
                  <td className="py-4">{row.role}</td>
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${getStatusDot(row.status)}`}
                      ></span>
                      {row.status}
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <button
                        className="text-[#03a9f4] hover:text-blue-700 transition-colors"
                        title="Settings"
                      >
                        <FiSettings className="text-xl" />
                      </button>
                      <button
                        className="text-[#f44336] hover:text-red-700 transition-colors"
                        title="Delete"
                      >
                        <FiXCircle className="text-xl" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

    
        <div className="flex items-center justify-between mt-6 text-sm text-[#566787]">
          <div>
            
            Showing <b>5</b> out of <b>25</b> entries
          </div>
          <div className="flex items-center gap-1">
            <button className="px-3 py-1 hover:text-[#03a9f4] transition-colors">
              Previous
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 transition-colors">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 transition-colors">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-[#03a9f4] text-white font-medium shadow-sm">
              3
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 transition-colors">
              4
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 transition-colors">
              5
            </button>
            <button className="px-3 py-1 hover:text-[#03a9f4] transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
