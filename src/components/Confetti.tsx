"use client";

import React, { useEffect, useState } from "react";

interface ConfettiProps {
  count?: number;
  intense?: boolean;
}

const CONFETTI_COLORS = [
  "#9333EA", // пурпурный
  "#A855F7", // светло-пурпурный
  "#8B5CF6", // фиолетовый
  "#6366F1", // индиго
  "#EC4899", // розовый
  "#D946EF", // фуксия
  "#F43F5E", // краcный
];

const randomBetween = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export function Confetti({ count = 100, intense = false }: ConfettiProps) {
  const [confetti, setConfetti] = useState<React.ReactNode[]>([]);
  
  useEffect(() => {
    const finalCount = intense ? count * 2 : count;
    const newConfetti = [];
    
    for (let i = 0; i < finalCount; i++) {
      const left = Math.random() * 100;
      const width = randomBetween(5, 15);
      const height = randomBetween(5, 15);
      const shape = Math.random() > 0.5 ? "circle" : "rect";
      const bg = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
      const delay = Math.random() * 5;
      const duration = randomBetween(5, 10);
      const rotation = randomBetween(-720, 720);
      const initialPosition = intense ? randomBetween(-20, 100) : -20;
      
      newConfetti.push(
        <div 
          key={i} 
          style={{
            position: "fixed",
            left: `${left}%`,
            top: initialPosition,
            width: `${width}px`,
            height: `${height}px`,
            backgroundColor: bg,
            borderRadius: shape === "circle" ? "50%" : "2px",
            opacity: "0.8",
            pointerEvents: "none",
            zIndex: "100",
            animation: `fall ${duration}s ease-in ${delay}s forwards, spin ${duration / 2}s linear ${delay}s infinite`,
            transform: `rotate(${Math.random() * 360}deg)`,
            boxShadow: `0 0 ${randomBetween(2, 5)}px ${bg}`,
          }}
        />
      );
    }
    setConfetti(newConfetti);
    
    // Создаем новую партию конфетти каждые 5 секунд, если установлен интенсивный режим
    let interval: NodeJS.Timeout;
    if (intense) {
      interval = setInterval(() => {
        const additionalConfetti = [];
        for (let i = 0; i < 20; i++) {
          const left = Math.random() * 100;
          const bg = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
          
          const confetti = document.createElement("div");
          confetti.className = "confetti";
          confetti.style.left = `${left}%`;
          confetti.style.backgroundColor = bg;
          confetti.style.boxShadow = `0 0 4px ${bg}`;
          document.body.appendChild(confetti);
          
          setTimeout(() => {
            if (confetti.parentNode) {
              document.body.removeChild(confetti);
            }
          }, 3000);
        }
      }, 5000);
    }
    
    return () => {
      if (intense && interval) {
        clearInterval(interval);
      }
    };
  }, [count, intense]);
  
  return <>{confetti}</>;
} 