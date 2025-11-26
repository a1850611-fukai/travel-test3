import React, { useEffect, useState } from 'react';
import { ElephantIcon, IconMapPin } from './ui/Icons';
import { WeatherData, DayItinerary } from '../types';

interface HeroProps {
  currentDay: DayItinerary;
}

const Hero: React.FC<HeroProps> = ({ currentDay }) => {
  const [weather, setWeather] = useState<WeatherData>({ temp: 30, condition: "Sunny", humidity: 60 });

  useEffect(() => {
    // Simple mock or we could fetch from an open API. 
    // Given React 18 strict mode, use a simple randomizer based on day ID to simulate variance.
    const baseTemp = 29;
    const variant = (currentDay.id % 3); 
    setWeather({
      temp: baseTemp + variant,
      condition: variant === 0 ? "Sunny" : variant === 1 ? "Cloudy" : "Hot",
      humidity: 60 + (variant * 5)
    });
  }, [currentDay.id]);

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-b-[40px] shadow-xl bg-thai-red z-10">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-thai-pattern"></div>
      
      {/* Decorative Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-thai-red via-thai-red to-thai-dark opacity-80"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-thai-cream px-6 text-center">
        
        <div className="absolute top-4 right-4 animate-pulse">
           <ElephantIcon className="w-12 h-12 text-thai-gold opacity-50" />
        </div>

        <h3 className="text-thai-gold font-sans font-medium tracking-widest text-sm uppercase mb-2">
            Thai Journey
        </h3>
        
        <h1 className="font-serif text-4xl font-bold mb-1 text-white drop-shadow-md">
          {currentDay.displayDate}
        </h1>
        <p className="font-sans text-thai-goldLight text-lg mb-6">{currentDay.weekday}</p>

        <div className="flex items-center space-x-6 bg-black/20 backdrop-blur-sm px-6 py-2 rounded-full border border-thai-gold/30">
          <div className="flex items-center space-x-2">
            <IconMapPin className="w-5 h-5 text-thai-gold" />
            <span className="font-medium text-sm">{currentDay.location}</span>
          </div>
          <div className="w-px h-6 bg-white/20"></div>
          <div className="flex items-center space-x-2">
            <span className="text-2xl">☀️</span>
            <span className="font-bold text-lg">{weather.temp}°C</span>
          </div>
        </div>
      </div>
      
      {/* Gold Border Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-thai-gold/0 via-thai-gold to-thai-gold/0"></div>
    </div>
  );
};

export default Hero;