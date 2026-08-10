import { useState } from "react";
import { Send, User, Bot, Search, MoreVertical } from "lucide-react";

export default function AdminSupport() {
  const [selectedUser, setSelectedUser] = useState(1);
  
  const [chats, setChats] = useState([
    { id: 1, name: "user123", status: "Ожидает ответа", messages: [
      { id: 1, text: "Здравствуйте! Я ИИ-ассистент BotForge. Чем могу помочь?", sender: "ai", time: "10:00" },
      { id: 2, text: "У меня проблема с ключом Bybit", sender: "user", time: "10:05" },
      { id: 3, text: "Ваш вопрос передан техническому специалисту. Ожидайте ответа.", sender: "ai", time: "10:05" }
    ]},
    { id: 2, name: "investor_pro", status: "Решено", messages: [
      { id: 1, text: "Как вывести средства?", sender: "user", time: "Вчера" },
      { id: 2, text: "Вывод средств доступен в разделе 'Мой Портфель' -> 'Запросить вывод'.", sender: "admin", time: "Вчера" }
    ]}
  ]);

  const [input, setInput] = useState("");

  const activeChat = chats.find(c => c.id === selectedUser);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim() || !activeChat) return;

    const newChats = chats.map(chat => {
      if (chat.id === selectedUser) {
        return {
          ...chat,
          status: "Отвечено",
          messages: [...chat.messages, { id: Date.now(), text: input, sender: "admin", time: new Date().toLocaleTimeString().slice(0,5) }]
        };
      }
      return chat;
    });

    setChats(newChats);
    setInput("");
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="border-b-2 border-black pb-4">
        <h1 className="text-3xl font-black text-black uppercase tracking-widest">Центр Поддержки</h1>
        <p className="text-gray-600 mt-2 text-sm uppercase">Управление тикетами и чаты с пользователями.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 h-[600px] max-h-[70vh]">
        
        {/* Список чатов */}
        <div className="w-full lg:w-1/3 bg-white border-2 border-black flex flex-col">
          <div className="p-4 border-b-2 border-black flex items-center gap-2">
            <Search className="w-5 h-5 text-gray-500" />
            <input type="text" placeholder="Поиск пользователя..." className="w-full font-mono text-sm focus:outline-none" />
          </div>
          <div className="flex-1 overflow-y-auto">
            {chats.map(chat => (
              <div 
                key={chat.id} 
                onClick={() => setSelectedUser(chat.id)}
                className={`p-4 border-b-2 border-gray-200 cursor-pointer transition-colors ${selectedUser === chat.id ? "bg-black text-white" : "hover:bg-gray-100"}`}
              >
                <div className="flex justify-between items-start mb-1">
                  <span className="font-bold uppercase tracking-widest">{chat.name}</span>
                  <span className={`text-[10px] font-bold uppercase px-2 py-0.5 border-2 ${selectedUser === chat.id ? "border-white" : "border-black bg-white text-black"}`}>
                    {chat.status}
                  </span>
                </div>
                <p className={`text-xs font-mono truncate ${selectedUser === chat.id ? "text-gray-300" : "text-gray-500"}`}>
                  {chat.messages[chat.messages.length - 1].text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Окно чата */}
        <div className="w-full lg:w-2/3 bg-gray-50 border-2 border-black flex flex-col relative overflow-hidden">
          {activeChat ? (
            <>
              <div className="p-4 border-b-2 border-black bg-white flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-black uppercase tracking-widest">{activeChat.name}</h2>
                    <p className="text-xs text-gray-500 font-mono">ID: #{activeChat.id}5892</p>
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-200 rounded-full transition-colors"><MoreVertical className="w-5 h-5"/></button>
              </div>

              <div className="flex-1 p-4 overflow-y-auto space-y-4">
                {activeChat.messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.sender === "admin" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[80%] border-2 border-black p-3 ${msg.sender === "admin" ? "bg-white" : msg.sender === "user" ? "bg-gray-200" : "bg-yellow-200"}`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold uppercase">{msg.sender === "admin" ? "Вы (Админ)" : msg.sender === "user" ? activeChat.name : "ИИ-Ассистент"}</span>
                        <span className="text-xs font-mono text-gray-500 ml-auto">{msg.time}</span>
                      </div>
                      <p className="font-mono text-sm">{msg.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSend} className="border-t-2 border-black p-4 flex gap-2 bg-white">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Введите ответ пользователю..." 
                  className="flex-1 border-2 border-black px-4 py-2 font-mono text-sm focus:outline-none"
                />
                <button type="submit" className="bg-black text-white px-6 py-2 border-2 border-black hover:bg-white hover:text-black font-bold uppercase transition-colors flex items-center justify-center">
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-400 font-bold uppercase tracking-widest">
              Выберите чат
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
