import React, { useState } from 'react';
import { Shield, Plus, Key, Settings, Trash2 } from 'lucide-react';

const RBAC = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: 'Super Admin', users: 2, permissions: 'All Access', color: 'bg-red-100 text-red-800' },
    { id: 2, name: 'Support Manager', users: 5, permissions: 'Support Tickets, User Data (Read Only)', color: 'bg-blue-100 text-blue-800' },
    { id: 3, name: 'Content Editor', users: 3, permissions: 'Blog CMS, News CMS', color: 'bg-green-100 text-green-800' },
    { id: 4, name: 'Financial Analyst', users: 2, permissions: 'Revenue Tracking, Platform Analytics', color: 'bg-yellow-100 text-yellow-800' },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Role-Based Access Control</h1>
        <button className="px-4 py-2 bg-black text-white rounded-md font-bold flex items-center hover:bg-gray-800 transition-colors">
          <Plus className="w-5 h-5 mr-2" /> Create Role
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black overflow-hidden">
        <div className="p-6 border-b-2 border-black flex items-center space-x-3 bg-gray-50">
          <Shield className="w-6 h-6 text-black" />
          <h2 className="text-xl font-bold">Configured Roles</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white border-b-2 border-black">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Role Name</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Users Assigned</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Permissions</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {roles.map((role) => (
                <tr key={role.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full border-2 border-black ${role.color}`}>
                      {role.name}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-bold">{role.users}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{role.permissions}</td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="p-2 border-2 border-black rounded hover:bg-gray-100"><Settings className="w-4 h-4" /></button>
                      <button className="p-2 border-2 border-black rounded hover:bg-gray-100"><Key className="w-4 h-4" /></button>
                      <button className="p-2 border-2 border-black rounded text-red-600 hover:bg-red-50"><Trash2 className="w-4 h-4" /></button>
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
};

export default RBAC;
