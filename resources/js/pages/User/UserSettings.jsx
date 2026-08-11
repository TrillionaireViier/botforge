import React, { useState } from 'react';
import { User, Lock, Mail, Bell, Shield, Save } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const UserSettings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const { user } = useAuth();

  return (
    <div className="space-y-6 max-w-5xl">
      <h1 className="text-3xl font-bold text-gray-900">Настройки</h1>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-64 space-y-2">
          <button 
            onClick={() => setActiveTab('profile')}
            className={`w-full flex items-center p-3 rounded-md font-bold transition-colors ${activeTab === 'profile' ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
          >
            <User className="w-5 h-5 mr-3" /> Профиль
          </button>
          <button 
            onClick={() => setActiveTab('security')}
            className={`w-full flex items-center p-3 rounded-md font-bold transition-colors ${activeTab === 'security' ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
          >
            <Shield className="w-5 h-5 mr-3" /> Безопасность
          </button>
          <button 
            onClick={() => setActiveTab('notifications')}
            className={`w-full flex items-center p-3 rounded-md font-bold transition-colors ${activeTab === 'notifications' ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
          >
            <Bell className="w-5 h-5 mr-3" /> Уведомления
          </button>
        </div>

        <div className="flex-1 bg-white p-8 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black">
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold border-b-2 border-black pb-2">Информация профиля</h2>
              <div className="flex items-center space-x-6">
                <div className="w-24 h-24 bg-gray-200 rounded-full border-2 border-black flex items-center justify-center text-3xl font-bold text-gray-400 uppercase">
                  {user ? user.name?.substring(0, 2) : 'JD'}
                </div>
                <button className="px-4 py-2 border-2 border-black rounded-md font-bold hover:bg-gray-50 shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                  Сменить аватар
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-sm font-bold mb-2">Отображаемое имя</label>
                  <input type="text" defaultValue={user?.name || ''} className="w-full p-3 border-2 border-black rounded-lg focus:ring-black focus:border-black" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Роль аккаунта</label>
                  <input type="text" disabled defaultValue={user?.role?.toUpperCase() || ''} className="w-full p-3 border-2 border-gray-300 bg-gray-100 rounded-lg text-gray-500 font-bold uppercase" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold mb-2">Email адрес</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="email" defaultValue={user?.email || ''} className="w-full p-3 pl-10 border-2 border-black rounded-lg focus:ring-black focus:border-black" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold border-b-2 border-black pb-2">Безопасность и пароль</h2>
              
              <div className="bg-yellow-50 p-4 border-2 border-yellow-400 rounded-lg flex items-start space-x-4">
                <Lock className="w-6 h-6 text-yellow-600 mt-1" />
                <div>
                  <h3 className="font-bold text-yellow-800">Двухфакторная аутентификация (2FA)</h3>
                  <p className="text-sm text-yellow-700 my-2">Защитите свой аккаунт, требуя код аутентификации в дополнение к паролю.</p>
                  <button className="px-4 py-2 bg-yellow-500 text-black font-bold rounded-md hover:bg-yellow-600 transition-colors border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                    Включить 2FA
                  </button>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <h3 className="font-bold text-lg">Изменить пароль</h3>
                <div>
                  <label className="block text-sm font-bold mb-2">Текущий пароль</label>
                  <input type="password" placeholder="••••••••" className="w-full p-3 border-2 border-black rounded-lg focus:ring-black focus:border-black" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Новый пароль</label>
                  <input type="password" placeholder="••••••••" className="w-full p-3 border-2 border-black rounded-lg focus:ring-black focus:border-black" />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold border-b-2 border-black pb-2">Настройки уведомлений</h2>
              <div className="space-y-4">
                <label className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg border-2 border-transparent hover:border-gray-200 transition-colors cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-2 border-black text-black focus:ring-black" />
                  <div>
                    <p className="font-bold">Исполнение сделок</p>
                    <p className="text-sm text-gray-500">Получать уведомления, когда бот совершает сделку</p>
                  </div>
                </label>
                <label className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg border-2 border-transparent hover:border-gray-200 transition-colors cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-2 border-black text-black focus:ring-black" />
                  <div>
                    <p className="font-bold">Оповещения безопасности</p>
                    <p className="text-sm text-gray-500">Подозрительные попытки входа и использование API</p>
                  </div>
                </label>
                <label className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg border-2 border-transparent hover:border-gray-200 transition-colors cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 rounded border-2 border-black text-black focus:ring-black" />
                  <div>
                    <p className="font-bold">Маркетинг и новости</p>
                    <p className="text-sm text-gray-500">Обновления платформы и рекламные предложения</p>
                  </div>
                </label>
              </div>
            </div>
          )}

          <div className="pt-8 flex justify-end">
            <button className="px-6 py-3 bg-black text-white rounded-md font-bold flex items-center hover:bg-gray-800 transition-colors border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
              <Save className="w-5 h-5 mr-2" /> Сохранить изменения
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
