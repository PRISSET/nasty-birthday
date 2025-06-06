"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Confetti } from "../../components/Confetti";

export default function Reward({
  searchParams,
}: {
  searchParams: { amount: string };
}) {
  const amount = searchParams.amount || "150";
  const [animateAmount, setAnimateAmount] = useState(false);
  const [showTelegram, setShowTelegram] = useState(false);
  
  useEffect(() => {
    // Запускаем анимацию суммы через небольшую задержку
    setTimeout(() => {
      setAnimateAmount(true);
    }, 1000);
    
    // Показываем кнопку телеграма через задержку
    setTimeout(() => {
      setShowTelegram(true);
    }, 2000);
    
    // Создаем эффект "выпадения" денег
    const createMoneyEffect = () => {
      for (let i = 0; i < 10; i++) {
        setTimeout(() => {
          const emojis = ["💰", "💵", "💸", "🤑", "💎"];
          const emoji = document.createElement("div");
          emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
          emoji.style.position = "fixed";
          emoji.style.fontSize = `${Math.random() * 1 + 2}rem`;
          emoji.style.left = `${Math.random() * 90 + 5}%`;
          emoji.style.top = "-50px";
          emoji.style.zIndex = "50";
          emoji.style.filter = "drop-shadow(0 0 10px rgba(191, 0, 255, 0.7))";
          emoji.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
          emoji.style.opacity = "0.9";
          document.body.appendChild(emoji);
          
          setTimeout(() => {
            if (emoji.parentNode) {
              document.body.removeChild(emoji);
            }
          }, 5000);
        }, i * 300);
      }
    };
    
    // Запускаем эффект денег
    createMoneyEffect();
    
    // Добавляем интервал для периодического падения денег
    const interval = setInterval(createMoneyEffect, 6000);
    
    return () => {
      clearInterval(interval);
    };
  }, []);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 relative overflow-hidden">
      <Confetti intense={true} />
      
      <div className="max-w-md w-full mx-auto space-y-8 text-center z-10">
        <h1 className="text-4xl font-bold cyberpunk-heading neon-text mb-2">
          ПОЗДРАВЛЯЮ!
        </h1>
        
        <div className="divider"></div>
        
        <div className="glassmorphism neon-border rounded-xl shadow-xl p-8 relative overflow-hidden border border-purple-500">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-fuchsia-900/20 z-0 animate-gradient"></div>
          
          <div className="relative z-10">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto bg-black bg-opacity-40 rounded-full flex items-center justify-center border-2 border-purple-500 quest-icon">
                <span className="text-5xl animate-bounce">🎉</span>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Задание выполнено!
            </h2>
            
            <div className="prize-box glassmorphism rounded-xl border border-yellow-400 p-6 mb-8">
              <div className="sparkle"></div>
              <div className="mb-2 text-yellow-200 text-sm uppercase tracking-wider">Твой приз</div>
              <p className="text-4xl font-bold mb-2">
                <span className={`${animateAmount ? 'text-shimmer transition-all duration-1000' : 'text-green-400'}`}>
                  {amount} гривен
                </span>
              </p>
              <div className="mt-2 text-yellow-200 text-sm">Награда за выполнение задания</div>
            </div>
            
            <p className="text-gray-300 mb-8 text-lg">
              Нажми на кнопку ниже, чтобы связаться со мной и получить свою награду.
            </p>
            
            <div className="relative z-10 mt-8">
              {showTelegram ? (
                <div className="transform transition-all duration-500">
                  <a 
                    href="https://t.me/PRISSET" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-glow inline-block py-4 px-8 rounded-lg hover-glow"
                  >
                    <div className="flex items-center justify-center">
                      <span className="mr-3 text-2xl">💰</span>
                      <span className="text-white font-bold text-lg">Получить деньги в Telegram</span>
                      <span className="ml-3 text-2xl">💰</span>
                    </div>
                  </a>
                </div>
              ) : (
                <div className="h-16 bg-purple-900/30 rounded-xl animate-pulse"></div>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-8 animate-fade-in" style={{ animationDelay: "1s" }}>
          <Link 
            href="/"
            className="footer-link"
          >
            Вернуться на главную
          </Link>
        </div>
      </div>
    </div>
  );
} 