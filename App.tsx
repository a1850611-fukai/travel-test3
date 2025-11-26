import React, { useState, useEffect } from 'react';
import { ITINERARY_DATA } from './constants';
import { Activity } from './types';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import BottomNav from './components/BottomNav';
import DetailModal from './components/DetailModal';

const App: React.FC = () => {
  const [currentDayId, setCurrentDayId] = useState<number>(1);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentDay = ITINERARY_DATA.find(d => d.id === currentDayId) || ITINERARY_DATA[0];

  const handleOpenDetails = (activity: Activity) => {
    setSelectedActivity(activity);
    setIsModalOpen(true);
  };

  const handleCloseDetails = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedActivity(null), 200);
  };

  // Scroll to top on day change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentDayId]);

  return (
    <div className="min-h-screen bg-thai-cream flex flex-col font-sans text-gray-900">
      
      {/* Header */}
      <Hero currentDay={currentDay} />

      {/* Main Content */}
      <main className="flex-grow -mt-8 z-20 bg-thai-cream rounded-t-[30px] min-h-[500px] shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
        <Timeline 
          day={currentDay} 
          onOpenDetails={handleOpenDetails} 
        />
      </main>

      {/* Navigation */}
      <BottomNav 
        currentDayId={currentDayId} 
        onSelectDay={setCurrentDayId} 
      />

      {/* Modals */}
      <DetailModal 
        isOpen={isModalOpen} 
        onClose={handleCloseDetails} 
        activity={selectedActivity} 
      />

    </div>
  );
};

export default App;