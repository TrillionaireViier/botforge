import React, { useState, useEffect } from 'react';
import { Users, UserX, UserCheck, Search, MoreVertical, Shield } from 'lucide-react';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("/api/admin/users", {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setUsers(data);
      }
    } catch (error) {
      console.error("Не удалось загрузить пользователей", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleRoleChange = async (userId, newRole) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`/api/admin/users/${userId}/role`, {
        method: "PATCH",
        headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify({ role: newRole })
      });
      if (res.ok) {
        fetchUsers();
      } else {
        alert("Не удалось обновить роль. Возможно, у вас нет прав super_admin.");
      }
    } catch (error) {
      console.error("Не удалось обновить роль", error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Управление пользователями</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black flex items-center space-x-4">
          <div className="p-4 bg-blue-100 rounded-lg border-2 border-black"><Users className="w-6 h-6 text-blue-600" /></div>
          <div>
            <p className="text-sm font-bold text-gray-500">Всего пользователей</p>
            <h3 className="text-2xl font-black">{users.length}</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black flex items-center space-x-4">
          <div className="p-4 bg-purple-100 rounded-lg border-2 border-black"><Shield className="w-6 h-6 text-purple-600" /></div>
          <div>
            <p className="text-sm font-bold text-gray-500">Персонал / Админы</p>
            <h3 className="text-2xl font-black">{users.filter(u => u.role !== 'user').length}</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black flex items-center space-x-4">
          <div className="p-4 bg-green-100 rounded-lg border-2 border-black"><UserCheck className="w-6 h-6 text-green-600" /></div>
          <div>
            <p className="text-sm font-bold text-gray-500">Статус платформы</p>
            <h3 className="text-2xl font-black">Все отлично</h3>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black overflow-hidden">
        <div className="p-6 border-b-2 border-black flex justify-between items-center">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input type="text" placeholder="Поиск пользователей..." className="w-full p-2 pl-10 border-2 border-black rounded-lg focus:ring-black focus:border-black" />
          </div>
          <button className="px-4 py-2 border-2 border-black rounded-lg font-bold hover:bg-gray-50 shadow-[2px_2px_0_0_rgba(0,0,0,1)]">Фильтр</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-black">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Пользователь</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Роль</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Статистика</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Регистрация</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Действия</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="font-bold text-gray-900">{user.name || 'Без имени'}</span>
                      <span className="text-sm text-gray-500">{user.email}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full border-2 border-black ${user.role === 'super_admin' ? 'bg-purple-100 text-purple-800' : user.role === 'admin' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                      {user.role.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-bold text-sm">
                    {user.trades_count || 0} Сделок
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 font-medium">
                    {new Date(user.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <select 
                      value={user.role}
                      onChange={(e) => handleRoleChange(user.id, e.target.value)}
                      className="p-2 border-2 border-black rounded-md font-bold text-sm focus:ring-black focus:border-black"
                    >
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                      <option value="super_admin">Super Admin</option>
                    </select>
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

export default UserManagement;
