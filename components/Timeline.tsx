import React from 'react';
import { DayItinerary, Activity } from '../types';
import EventCard from './EventCard';

interface TimelineProps {
  day: DayItinerary;
  onOpenDetails: (activity: Activity) => void;
}

const Timeline: React.FC<TimelineProps> = ({ day, onOpenDetails }) => {
  return (
    <div className="flex-1 w-full max-w-2xl mx-auto px-5 pb-32 pt-6">
      <div className="mb-6 pl-2">
        <h2 className="text-2xl font-serif font-bold text-gray-800 border-l-4 border-thai-gold pl-3">
          {day.title}
        </h2>
        <p className="text-sm text-gray-500 pl-4 mt-1">
            {day.activities.length} activities scheduled
        </p>
      </div>

      <div className="relative">
        {day.activities.map((activity, index) => (
          <EventCard 
            key={activity.id} 
            activity={activity} 
            isLast={index === day.activities.length - 1}
            onOpenDetails={onOpenDetails}
          />
        ))}

        {/* End of day marker */}
        <div className="flex flex-col items-center mt-4 opacity-50">
            <div className="w-2 h-2 rounded-full bg-thai-gold"></div>
            <p className="text-xs text-gray-400 mt-2 font-serif italic">End of Day {day.id}</p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;