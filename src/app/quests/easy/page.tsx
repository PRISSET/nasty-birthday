import Link from "next/link";

export default function EasyQuest() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12">
      <div className="max-w-md w-full mx-auto space-y-8 text-center">
        <h1 className="text-2xl font-bold text-pink-500">Легкое задание (50 грн)</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6">
            <span className="text-4xl">🎮</span>
          </div>
          <h2 className="text-xl font-semibold mb-4">Вспомни моменты</h2>
          <p className="text-gray-700 mb-6">
            Напиши мне сообщение, в котором расскажи о трех самых ярких воспоминаниях, 
            связанных с нами. Что больше всего запомнилось и почему?
          </p>
          
          <div className="bg-pink-50 rounded-lg p-4 text-pink-700 text-sm">
            <p>Подсказка: Это могут быть любые моменты, которые для тебя особенны!</p>
          </div>
        </div>
        
        <div className="flex space-x-4 mt-6">
          <Link 
            href="/"
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded transition duration-300"
          >
            Назад
          </Link>
          <Link 
            href="/reward?amount=50"
            className="flex-1 bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white py-2 px-4 rounded shadow transition duration-300"
          >
            Получить награду
          </Link>
        </div>
      </div>
    </div>
  );
} 