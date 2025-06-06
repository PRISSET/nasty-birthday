import Link from "next/link";

export default function HardQuest() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12">
      <div className="max-w-md w-full mx-auto space-y-8 text-center">
        <h1 className="text-2xl font-bold text-indigo-500">Сложное задание (150 грн)</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6">
            <span className="text-4xl">🔎</span>
          </div>
          <h2 className="text-xl font-semibold mb-4">Квест-загадка</h2>
          <p className="text-gray-700 mb-6">
            Найди на моем рабочем столе маленькую коробочку с сюрпризом. 
            Внутри есть подсказка к следующему шагу. Пройди все шаги цепочки 
            и найди спрятанный подарок. Отправь мне фото найденного подарка.
          </p>
          
          <div className="bg-indigo-50 rounded-lg p-4 text-indigo-700 text-sm">
            <p>Подсказка: Начни искать там, где я обычно оставляю ключи.</p>
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
            href="/reward?amount=150"
            className="flex-1 bg-gradient-to-r from-indigo-400 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600 text-white py-2 px-4 rounded shadow transition duration-300"
          >
            Получить награду
          </Link>
        </div>
      </div>
    </div>
  );
} 