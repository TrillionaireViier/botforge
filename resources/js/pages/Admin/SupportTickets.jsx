import React, { useState, useEffect } from 'react';
import { LifeBuoy, Clock, CheckCircle, MessageSquare, Loader2 } from 'lucide-react';

const SupportTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTickets = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/admin/tickets", {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setTickets(data);
      }
    } catch (error) {
      console.error("Failed to fetch support tickets", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const handleStatusChange = async (ticketId, newStatus) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:5000/api/admin/tickets/${ticketId}/status`, {
        method: "PATCH",
        headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) {
        fetchTickets();
      }
    } catch (error) {
      console.error("Failed to update status", error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Support Ticket Queue</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black flex items-center space-x-4">
          <div className="p-3 bg-red-100 rounded-lg border-2 border-black"><LifeBuoy className="w-6 h-6 text-red-600" /></div>
          <div>
            <p className="text-sm font-bold text-gray-500">Open Tickets</p>
            <h3 className="text-2xl font-black">{tickets.filter(t => t.status === 'open').length}</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black flex items-center space-x-4">
          <div className="p-3 bg-yellow-100 rounded-lg border-2 border-black"><Clock className="w-6 h-6 text-yellow-600" /></div>
          <div>
            <p className="text-sm font-bold text-gray-500">In Progress</p>
            <h3 className="text-2xl font-black">{tickets.filter(t => t.status === 'in_progress').length}</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black flex items-center space-x-4">
          <div className="p-3 bg-green-100 rounded-lg border-2 border-black"><CheckCircle className="w-6 h-6 text-green-600" /></div>
          <div>
            <p className="text-sm font-bold text-gray-500">Resolved</p>
            <h3 className="text-2xl font-black">{tickets.filter(t => t.status === 'resolved').length}</h3>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black overflow-hidden">
        <div className="p-6 border-b-2 border-black flex justify-between items-center bg-gray-50">
          <h2 className="text-xl font-bold">Active Queue</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white border-b-2 border-black">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">ID / Subject</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">User</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Priority</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Status</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Last Updated</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {tickets.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-gray-50 cursor-pointer">
                  <td className="px-6 py-4">
                    <p className="font-bold text-blue-600">{ticket.id.split('-')[0].toUpperCase()}</p>
                    <p className="font-bold text-gray-900">{ticket.subject}</p>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">
                    <p>{ticket.user?.name || 'Unknown'}</p>
                    <p className="text-xs text-gray-500">{ticket.user?.email}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs font-black rounded border-2 border-black bg-yellow-200 text-yellow-900">
                      Standard
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <select
                      value={ticket.status}
                      onChange={(e) => handleStatusChange(ticket.id, e.target.value)}
                      className={`p-2 font-bold text-xs border-2 border-black rounded ${
                        ticket.status === 'open' ? 'bg-red-100 text-red-800' :
                        ticket.status === 'in_progress' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}
                    >
                      <option value="open">OPEN</option>
                      <option value="in_progress">IN PROGRESS</option>
                      <option value="resolved">RESOLVED</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{new Date(ticket.updatedAt).toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <button className="p-2 bg-black text-white rounded hover:bg-gray-800"><MessageSquare className="w-4 h-4" /></button>
                  </td>
                </tr>
              ))}
              {tickets.length === 0 && !loading && (
                <tr>
                  <td colSpan="6" className="px-6 py-8 text-center text-gray-500 font-bold">No tickets found in the system.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SupportTickets;
