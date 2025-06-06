"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

type ColorName = "purple" | "indigo" | "fuchsia";

interface Quest {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: ColorName;
  difficulty: "easy" | "medium" | "hard";
}

interface ColorScheme {
  bg: string;
  border: string;
  glow: string;
  text: string;
  accent: string;
}

interface ColorMap {
  [key: string]: ColorScheme;
}

export default function QuestsPage() {
  const [selectedQuest, setSelectedQuest] = useState<Quest | null>(null);
  const [prize] = useState<number>(150);
  const [isShuffling, setIsShuffling] = useState(true);
  const [questsReady, setQuestsReady] = useState(false);
  
  const quests: Quest[] = [
    {
      id: "q1",
      title: "Музыкальный вызов",
      description: "Запиши короткое видео, где ты танцуешь или поешь свою любимую песню, и отправь мне!",
      icon: "🎵",
      color: "purple",
      difficulty: "easy"
    },
    {
      id: "q2",
      title: "Креативное фото",
      description: "Сделай необычное селфи с каким-нибудь забавным аксессуаром и отправь мне с забавной подписью!",
      icon: "📸",
      color: "indigo",
      difficulty: "medium"
    },
    {
      id: "q3",
      title: "Написать стих",
      description: "Напиши небольшое стихотворение о нашей дружбе и отправь мне!",
      icon: "✍️",
      color: "fuchsia",
      difficulty: "hard"
    }
  ];

  // Цвета для карточек квестов
  const questColors: ColorMap = {
    purple: {
      bg: "bg-gradient-to-br from-purple-900 to-purple-700",
      border: "border-purple-500",
      glow: "shadow-[0_0_20px_rgba(191,0,255,0.4)]",
      text: "text-purple-300",
      accent: "#BF00FF"
    },
    indigo: {
      bg: "bg-gradient-to-br from-indigo-900 to-indigo-700",
      border: "border-indigo-400",
      glow: "shadow-[0_0_20px_rgba(99,102,241,0.4)]",
      text: "text-indigo-300",
      accent: "#6366F1"
    },
    fuchsia: {
      bg: "bg-gradient-to-br from-fuchsia-900 to-fuchsia-700",
      border: "border-fuchsia-400",
      glow: "shadow-[0_0_20px_rgba(217,70,239,0.4)]", 
      text: "text-fuchsia-300",
      accent: "#D946EF"
    }
  };

  // Эффект инициализации: перемешивание карт
  useEffect(() => {
    if (isShuffling) {
      // Анимация перемешивания карт
      setTimeout(() => {
        setIsShuffling(false);
        setTimeout(() => {
          setQuestsReady(true);
        }, 500);
      }, 1000);
    }
  }, [isShuffling]);
  
  const handleQuestClick = (quest: Quest) => {
    setSelectedQuest(quest);
    
    // Создаем эффект конфетти при выборе квеста
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        const colors = ["#BF00FF", "#D946EF", "#7B00CA", "#FF3399", "#6366F1"];
        const confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.boxShadow = `0 0 6px ${colors[Math.floor(Math.random() * colors.length)]}`;
        document.body.appendChild(confetti);
        
        setTimeout(() => {
          document.body.removeChild(confetti);
        }, 2000);
      }, i * 80);
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12">
      <main className="max-w-md w-full mx-auto space-y-8 text-center z-10">
        <h1 className="text-4xl font-bold cyberpunk-heading neon-text">
          ВЫБЕРИ КВЕСТ
        </h1>
        
        {!selectedQuest ? (
          <div className="space-y-8">
            <div className="divider"></div>
            
            <div className="grid grid-cols-1 gap-6 relative min-h-[300px]">
              {quests.map((quest, index) => (
                <button
                  key={quest.id}
                  className={`
                    quest-card glassmorphism neon-border
                    text-white rounded-xl px-6 py-5 shadow-xl
                    text-left flex items-center
                    ${isShuffling ? 'shuffling-card' : questsReady ? 'card-ready' : 'card-waiting'}
                  `}
                  style={{
                    animationDelay: `${index * 0.15}s`,
                    transitionDelay: `${index * 0.1}s`,
                    boxShadow: questsReady ? `0 5px 20px rgba(${questColors[quest.color].accent.replace('#', '')}, 0.3)` : 'none'
                  }}
                  onClick={() => handleQuestClick(quest)}
                  disabled={isShuffling || !questsReady}
                >
                  <div className={`quest-icon w-14 h-14 flex-shrink-0 ${questColors[quest.color].bg} bg-opacity-40 rounded-full flex items-center justify-center mr-4 ${questColors[quest.color].border} border-2`}>
                    <span className="text-2xl">{quest.icon}</span>
                  </div>
                  <div>
                    <h3 className={`font-bold text-xl ${questColors[quest.color].text}`}>{quest.title}</h3>
                    <p className="text-white text-opacity-70 text-sm mt-1">Нажми чтобы увидеть задание</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-8 animate-fade-in">
            <div className="divider"></div>
            
            <div className={`glassmorphism neon-border rounded-xl shadow-lg p-8 border ${questColors[selectedQuest.color].border} ${questColors[selectedQuest.color].glow}`}>
              <div className="mb-8">
                <div className={`w-20 h-20 mx-auto quest-icon ${questColors[selectedQuest.color].bg} bg-opacity-30 rounded-full flex items-center justify-center border-2 ${questColors[selectedQuest.color].border}`}>
                  <span className="text-4xl">{selectedQuest.icon}</span>
                </div>
              </div>
              
              <h2 className={`text-3xl font-bold mb-6 ${questColors[selectedQuest.color].text} neon-text`}>
                {selectedQuest.title}
              </h2>
              
              <p className="text-gray-200 mb-8 text-lg leading-relaxed">
                {selectedQuest.description}
              </p>
              
              <div className="relative prize-box glassmorphism border border-yellow-400 rounded-lg p-6 mt-8">
                <div className="sparkle"></div>
                <div className="mb-2 text-yellow-200 text-sm uppercase tracking-wider">Твой приз</div>
                <p className="text-3xl font-bold text-shimmer">{prize} гривен</p>
                <div className="mt-2 text-yellow-200 text-sm">Выполни задание и получи награду!</div>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-8">
              <button
                onClick={() => {
                  setSelectedQuest(null);
                }}
                className="flex-1 bg-gray-900 hover:bg-gray-800 text-gray-300 py-4 px-6 rounded-lg transition duration-300 font-medium border border-gray-700"
              >
                Выбрать другой
              </button>
              <Link 
                href={`/reward?amount=${prize}`}
                className="flex-1 btn-glow py-4 px-6 rounded-lg font-medium"
              >
                <span className="block text-white">Получить награду</span>
              </Link>
            </div>
          </div>
        )}
      </main>
      
      <footer className="mt-12">
        <Link href="/" className="footer-link">
          Вернуться на главную
        </Link>
      </footer>
    </div>
  );
} 