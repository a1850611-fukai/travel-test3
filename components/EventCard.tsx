import React, { useState } from 'react';
import { Activity, ActivityType } from '../types';
import { IconMapPin, IconTransport, IconCamera, IconFood, IconTicket, IconStar } from './ui/Icons';
import { getCulturalTip } from '../services/geminiService';

interface EventCardProps {
  activity: Activity;
  isLast: boolean;
  onOpenDetails: (activity: Activity) => void;
}

const EventCard: React.FC<EventCardProps> = ({ activity, isLast, onOpenDetails }) => {
  const [tip, setTip] = useState<string | null>(null);
  const [loadingTip, setLoadingTip] = useState(false);

  const getIcon = () => {
    switch (activity.type) {
      case ActivityType.Transport: return <IconTransport className="w-5 h-5" />;
      case ActivityType.Food: return <IconFood className="w-5 h-5" />;
      case ActivityType.Sightseeing: return <IconCamera className="w-5 h-5" />;
      default: return <IconTicket className="w-5 h-5" />;
    }
  };

  const handleAskAI = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (tip) return; // Already fetched
    setLoadingTip(true);
    const result = await getCulturalTip(activity.location, activity.title);
    setTip(result);
    setLoadingTip(false);
  };

  const openMap = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activity.mapsQuery)}`, '_blank');
  };

  return (
    <div className="flex group mb-2">
      {/* Time Column */}
      <div className="flex flex-col items-center mr-4 min-w-[60px]">
        <div className="text-sm font-bold text-thai-red font-mono">{activity.time}</div>
        <div className={`w-0.5 bg-gray-200 my-2 ${isLast ? 'h-0' : 'h-full flex-grow'}`}></div>
      </div>

      {/* Card Content */}
      <div 
        onClick={() => onOpenDetails(activity)}
        className="flex-grow bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-thai-gold/50 transition-all duration-300 active:scale-[0.99] mb-4 relative overflow-hidden cursor-pointer"
      >
        {/* Type Icon Badge */}
        <div className={`absolute top-0 right-0 p-2 rounded-bl-xl ${
            activity.type === ActivityType.Transport ? 'bg-gray-100 text-gray-600' : 'bg-thai-gold/20 text-thai-red'
        }`}>
            {getIcon()}
        </div>

        <h4 className="font-bold text-gray-800 pr-8 line-clamp-2">{activity.title}</h4>
        
        <div 
            onClick={openMap}
            className="inline-flex items-center text-xs text-gray-500 mt-1 hover:text-blue-600 transition-colors z-20"
        >
            <IconMapPin className="w-3 h-3 mr-1" />
            <span className="underline decoration-dotted">{activity.location}</span>
        </div>

        {activity.description && (
             <p className="text-xs text-gray-500 mt-3 leading-relaxed border-l-2 border-thai-goldLight pl-2">
                {activity.description}
             </p>
        )}

        {/* Action Buttons */}
        <div className="flex items-center mt-4 space-x-2">
            {activity.bookingId && (
                 <span className="text-[10px] font-bold bg-thai-red/10 text-thai-red px-2 py-1 rounded border border-thai-red/20">
                    BOOKED
                 </span>
            )}
            
            <button 
                onClick={handleAskAI}
                className={`text-[10px] font-bold px-2 py-1 rounded flex items-center transition-colors ${
                    tip ? 'bg-indigo-50 text-indigo-800 border border-indigo-100' : 'bg-thai-gold text-white shadow-sm'
                }`}
            >
                {loadingTip ? 'Thinking...' : tip ? 'AI Insight' : '✨ Ask AI Tip'}
            </button>
        </div>

        {/* AI Tip Result */}
        {tip && (
            <div className="mt-2 text-xs text-indigo-700 bg-indigo-50 p-2 rounded-lg animate-in fade-in slide-in-from-top-1">
                "{tip}"
            </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;