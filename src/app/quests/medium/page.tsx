import Link from "next/link";

export default function MediumQuest() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12">
      <div className="max-w-md w-full mx-auto space-y-8 text-center">
        <h1 className="text-2xl font-bold text-purple-500">Среднее задание (100 грн)</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6">
            <span className="text-4xl">🎨</span>
          </div>
          <h2 className="text-xl font-semibold mb-4">Творческий вызов</h2>
          <p className="text-gray-700 mb-6">
            Сделай селфи с каким-нибудь необычным аксессуаром или в забавном образе и 
            отправь его мне с поздравлением для себя от своего имени. 
            Будь креативна и повеселись!
          </p>
          
          <div className="bg-purple-50 rounded-lg p-4 text-purple-700 text-sm">
            <p>Подсказка: Это может быть что угодно - смешная шляпа, очки, нарисованные усы.</p>
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
            href="/reward?amount=100"
            className="flex-1 bg-gradient-to-r from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600 text-white py-2 px-4 rounded shadow transition duration-300"
          >
            Получить награду
          </Link>
        </div>
      </div>
    </div>
  );
} 