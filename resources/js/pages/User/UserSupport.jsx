import React, { useState, useEffect } from 'react';
import { LifeBuoy, MessageSquare, Plus, Clock, CheckCircle } from 'lucide-react';

const UserSupport = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTickets = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/support", {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        const mappedTickets = data.map(t => ({
          id: `TKT-${t.id}`,
          subject: t.subject,
          status: t.status,
          updated: new Date(t.updatedAt).toLocaleDateString()
        }));
        setTickets(mappedTickets);
      }
    } catch (error) {
      console.error("Failed to fetch tickets", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const handleNewTicket = async () => {
    const subject = prompt("Enter a subject for your new ticket:");
    if (!subject) return;

    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/support", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify({ subject })
      });
      if (res.ok) {
        fetchTickets();
      }
    } catch (error) {
      console.error("Failed to create ticket", error);
    }
  };

  return (
    <div className="space-y-6 max-w-5xl">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Support Center</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black flex flex-col items-center justify-center text-center hover:bg-gray-50 cursor-pointer transition-colors">
          <LifeBuoy className="w-10 h-10 text-blue-600 mb-3" />
          <h3 className="text-xl font-bold">FAQ & Knowledge Base</h3>
          <p className="text-sm text-gray-500 mt-2">Find answers to common questions quickly.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black flex flex-col items-center justify-center text-center hover:bg-gray-50 cursor-pointer transition-colors">
          <MessageSquare className="w-10 h-10 text-green-600 mb-3" />
          <h3 className="text-xl font-bold">Live Chat</h3>
          <p className="text-sm text-gray-500 mt-2">Chat with our support agents instantly.</p>
        </div>
        <div onClick={handleNewTicket} className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black flex flex-col items-center justify-center text-center bg-yellow-100 hover:bg-yellow-200 cursor-pointer transition-colors">
          <Plus className="w-10 h-10 text-black mb-3" />
          <h3 className="text-xl font-black">Open New Ticket</h3>
          <p className="text-sm text-gray-700 mt-2">Get help with complex technical issues.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black overflow-hidden">
        <div className="p-6 border-b-2 border-black">
          <h2 className="text-xl font-bold">Your Support Tickets</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-black">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Ticket ID</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Subject</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Status</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Last Updated</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {tickets.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-mono font-bold text-blue-600">{ticket.id}</td>
                  <td className="px-6 py-4 font-bold text-gray-900">{ticket.subject}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full border-2 border-black flex items-center w-max ${ticket.status === 'Open' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                      {ticket.status === 'Open' ? <Clock className="w-3 h-3 mr-1" /> : <CheckCircle className="w-3 h-3 mr-1" />}
                      {ticket.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-500">{ticket.updated}</td>
                  <td className="px-6 py-4">
                    <button className="px-3 py-1 bg-black text-white rounded font-bold hover:bg-gray-800 text-sm">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserSupport;
