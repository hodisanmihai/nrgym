'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

import background from "../assets/items/bg2.png";

const cards = [
  { name: "ZI", price: "40 RON/zi", description: "Perfect pentru cei care doresc să încerce facilitățile noastre pentru o zi, fără angajamente pe termen lung. Ideal pentru o sesiune intensă de antrenament." },
  { name: "Lunar", price: "225 RON", description: "Abonamentul lunar este ideal pentru cei care vor să se antreneze constant și să își îmbunătățească performanțele în timp. Fără obligații pe termen lung, plătești doar pentru o lună." },
  { name: "Studenți", price: "200 RON", description: "Oferim un tarif special pentru studenți! Dacă ești student și vrei să îți menții corpul activ, acest abonament îți oferă acces la toate facilitățile noastre la un preț accesibil." },
  { name: "Family", price: "185 RON (pentru 3+ membri)", description: "Abonamentul perfect pentru familii! Reducere pentru 3 sau mai mulți membri care se înscriu împreună. Antrenează-te alături de cei dragi și menține o viață sănătoasă împreună." },
  { name: "6 Luni", price: "1200 RON", description: "Abonament semestrial care îți permite să te concentrezi pe antrenamentele tale pe termen lung, economisind în același timp bani față de plata lunară." },
  { name: "12 Luni", price: "2250 RON", description: "Abonamentul anual este soluția ideală pentru cei care sunt dedicați să își îmbunătățească forma fizică pe termen lung. Economisești substanțial și te bucuri de acces continuu la toate facilitățile noastre." },
  { name: "6 Luni Studenți", price: "1050 RON", description: "Oferă studenților o opțiune accesibilă pe termen mediu. Antrenează-te constant pe parcursul semestrului și economisește cu acest abonament dedicat." },
  { name: "12 Luni Studenți", price: "2050 RON", description: "Abonamentul anual pentru studenți este perfect pentru cei care doresc să se angajeze pe termen lung în dezvoltarea lor fizică. Oferă acces constant la toate serviciile noastre, la un preț avantajos." },
  { name: "1 Săptămână", price: "90 RON", description: "Abonament flexibil pentru cei care vor să se antreneze o săptămână. Ideal pentru vacanțe sau o perioadă scurtă în care vrei să te focusezi pe antrenamente intense." },
  { name: "2 Săptămâni", price: "140 RON", description: "Ideal pentru un antrenament intensiv pe termen scurt. Perfect pentru cei care vor să experimenteze gym-ul nostru înainte de a opta pentru un abonament pe termen lung." }
];

const Pricing = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const pricingInner = containerRef.current;
    if (!pricingInner) return;

    let isDown = false;

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      pricingInner.style.cursor = 'grabbing';
      startX.current = e.pageX - pricingInner.offsetLeft;
      scrollLeft.current = pricingInner.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      pricingInner.style.cursor = 'grab';
    };

    const handleMouseUp = () => {
      isDown = false;
      pricingInner.style.cursor = 'grab';
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - pricingInner.offsetLeft;
      const walk = (x - startX.current) * 3;
      pricingInner.scrollLeft = scrollLeft.current - walk;
    };

    pricingInner.addEventListener('mousedown', handleMouseDown);
    pricingInner.addEventListener('mouseleave', handleMouseLeave);
    pricingInner.addEventListener('mouseup', handleMouseUp);
    pricingInner.addEventListener('mousemove', handleMouseMove);

    return () => {
      pricingInner.removeEventListener('mousedown', handleMouseDown);
      pricingInner.removeEventListener('mouseleave', handleMouseLeave);
      pricingInner.removeEventListener('mouseup', handleMouseUp);
      pricingInner.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);
  return (
    <div className="w-full flex justify-center bg-white" id='pricing'>
      <div className="w-[90%] h-fit mt-4 relative md:block mb-6" >
        <Image
          src={background}
          alt="background"
          className="w-full rounded-2xl h-[650px] object-cover"
        />

        {/* Elements */}
        <div className="absolute top-0 text-center text-white w-full h-full flex justify-center">
          <div className="w-[90%] mt-10 flex justify-start flex-col space-y-12">
            {/* Title Section */}
            <div className="text-end space-y-2">
              <h3 className="text-sm sm:text-base tracking-[1rem] text-gray-200 uppercase">
                Preturi
              </h3>
              <h1 className="font-extrabold text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-white">
                ABONAMENTE
              </h1>
            </div>

            {/* Cards Section */}
            <div 
              ref={containerRef}
              className="h-[400px] scrollbar-hide w-full flex flex-row gap-6 overflow-x-auto overflow-y-clip scrollbar-hide scroll-smooth snap-x snap-mandatory px-4 py-2 user-select-none"
            >
              {cards.map((item, index) => {
                const isGlassEffect = index % 2 === 0; // Use even index for the glass effect
                return (
                  <div
                    key={index}
                    className={`${
                      isGlassEffect
                        ? "bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-25 shadow-lg"
                        : "bg-white bg-opacity-100 border border-gray-300 shadow-lg"
                    } rounded-2xl overflow-hidden min-w-[280px] md:min-w-[320px] lg:min-w-[360px] h-[350px] flex flex-col items-center justify-between p-6 snap-center transition-transform duration-300 hover:scale-105`}
                    style={{ userSelect: 'none' }} // Prevent text selection
                  >
                    {/* Card Title */}
                    <h3 className="text-2xl font-bold text-gray-700 mb-2 uppercase">
                      {item.name}
                    </h3>

                    {/* Card Price */}
                    <div className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg text-lg font-semibold text-center shadow-md">
                      {item.price}
                    </div>

                    {/* Card Description */}
                    <p className="text-gray-700 text-sm text-center leading-relaxed opacity-90">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
