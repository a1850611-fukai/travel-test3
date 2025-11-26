import React from 'react';
import { ITINERARY_DATA } from '../constants';

interface BottomNavProps {
  currentDayId: number;
  onSelectDay: (id: number) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentDayId, onSelectDay }) => {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-40">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20 p-2 overflow-x-auto no-scrollbar">
            <div className="flex justify-between items-center min-w-full px-1 space-x-2">
                {ITINERARY_DATA.map((day) => {
                    const isActive = day.id === currentDayId;
                    return (
                        <button
                            key={day.id}
                            onClick={() => onSelectDay(day.id)}
                            className={`flex flex-col items-center justify-center min-w-[3.5rem] py-2 rounded-xl transition-all duration-300 ${
                                isActive 
                                ? 'bg-thai-red text-white shadow-md transform -translate-y-1' 
                                : 'text-gray-400 hover:bg-gray-100'
                            }`}
                        >
                            <span className={`text-[10px] font-bold uppercase tracking-wider ${isActive ? 'text-thai-goldLight' : ''}`}>
                                Day
                            </span>
                            <span className={`text-lg font-serif font-bold leading-none ${isActive ? 'text-white' : 'text-gray-600'}`}>
                                {day.id}
                            </span>
                            <span className="text-[9px] mt-0.5 opacity-80">
                                {day.date}
                            </span>
                        </button>
                    )
                })}
            </div>
        </div>
    </div>
  );
};

export default BottomNav;