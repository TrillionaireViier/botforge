import { BookOpen, ArrowRight } from "lucide-react";

export default function Blog() {
  const posts = [
    { id: 1, title: "Топ-5 алгоритмов для скальпинга в 2026 году", category: "Стратегии", readTime: "5 мин" },
    { id: 2, title: "Как нейросети меняют копитрейдинг", category: "Технологии", readTime: "8 мин" },
    { id: 3, title: "Риск-менеджмент: почему это важнее прибыли", category: "Обучение", readTime: "12 мин" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-black mb-8 flex items-center"><BookOpen className="mr-3 w-8 h-8" /> Блог</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => (
          <div key={post.id} className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-all cursor-pointer flex flex-col justify-between">
            <div>
              <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{post.category}</span>
              <h2 className="text-xl font-bold mt-4 mb-2">{post.title}</h2>
              <p className="text-gray-600 text-sm mb-6">Время чтения: {post.readTime}</p>
            </div>
            <button className="flex items-center text-black font-bold uppercase hover:underline mt-4">
              Читать <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
