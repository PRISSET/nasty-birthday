"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [clickCount, setClickCount] = useState(0);
  const [showWishes, setShowWishes] = useState(false);
  const [currentWish, setCurrentWish] = useState(0);
  
  const wishes = [
    "С Днем Рождения, Настя! Желаю тебе счастья и здоровья! 🎉",
    "Пусть все твои мечты сбываются! ✨",
    "Улыбок, радости и много любви! ❤️",
    "Пусть этот год будет особенным! 🌟"
  ];
  
  useEffect(() => {
    if (clickCount >= 5) {
      setShowWishes(true);
    }
  }, [clickCount]);
  
  useEffect(() => {
    if (showWishes) {
      const interval = setInterval(() => {
        setCurrentWish(prev => (prev + 1) % wishes.length);
      }, 4000);
      
      return () => {
        clearInterval(interval);
      };
    }
  }, [showWishes, wishes]);
  
  const handleCakeClick = () => {
    setClickCount(prev => prev + 1);
    
    // Create a confetti effect when cake is clicked
    const colors = ["#BF00FF", "#D946EF", "#7B00CA", "#FF3399", "#6366F1"];
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = `${Math.random() * 80 + 10}%`;
    confetti.style.top = `${Math.random() * 80 + 10}%`;
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.boxShadow = `0 0 6px ${colors[Math.floor(Math.random() * colors.length)]}`;
    document.body.appendChild(confetti);
    
    setTimeout(() => {
      document.body.removeChild(confetti);
    }, 2000);
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 relative">
      <main className="max-w-md w-full mx-auto space-y-8 text-center relative z-10">
        <h1 className="text-4xl font-bold cyberpunk-heading neon-text mb-2">
          С ДНЕМ РОЖДЕНИЯ, НАСТЯ!
        </h1>
        
        <div className="divider"></div>
        
        {!showWishes ? (
          <div className="space-y-8 animate-fade-in">
            <p className="text-lg text-gray-300">
              Нажми на торт <span className="neon-number">{5 - clickCount}</span> {5 - clickCount === 1 ? 'раз' : 5 - clickCount >= 2 && 5 - clickCount <= 4 ? 'раза' : 'раз'} чтобы получить поздравление
            </p>
            
            <div 
              className="cake-button relative w-40 h-40 mx-auto cursor-pointer transition-transform hover:scale-105 active:scale-95"
              onClick={handleCakeClick}
            >
              <div className="absolute inset-0 rounded-full bg-black border-2 border-purple-600 flex items-center justify-center shadow-lg">
                <span className="text-6xl">🎂</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-8 animate-fade-in">
            <div className="cake-button relative w-40 h-40 mx-auto">
              <div className="absolute inset-0 rounded-full bg-black border-2 border-purple-600 flex items-center justify-center shadow-lg">
                <span className="text-6xl">🎂</span>
              </div>
            </div>
            
            <div className="glassmorphism neon-border rounded-xl shadow-lg p-6 min-h-[100px] flex items-center justify-center transition-all duration-500 relative overflow-hidden">
              <p className="text-xl text-gray-200 animate-fade-in" key={currentWish}>
                {wishes[currentWish]}
              </p>
            </div>
            
            <div className="animate-fade-in mt-8">
              <Link 
                href="/quests"
                className="btn-glow inline-block px-8 py-4 rounded-lg hover-glow"
              >
                <span className="block text-white font-bold text-lg">
                  Участвовать в квесте и выиграть приз!
                </span>
              </Link>
            </div>
          </div>
        )}
      </main>
      
      <footer className="mt-16 text-center">
        <p className="footer-link">С любовью ❤️</p>
      </footer>
    </div>
  );
}
