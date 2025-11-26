import React from 'react';
import { Activity, ActivityType } from '../types';
import { IconClose, IconTicket, IconTransport } from './ui/Icons';

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  activity: Activity | null;
}

const DetailModal: React.FC<DetailModalProps> = ({ isOpen, onClose, activity }) => {
  if (!isOpen || !activity) return null;

  // Prevent background scroll
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const isTransport = activity.type === ActivityType.Transport;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-thai-cream w-full max-w-sm rounded-2xl shadow-2xl overflow-hidden border-2 border-thai-gold animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="bg-thai-red px-6 py-4 flex justify-between items-center">
            <h3 className="text-white font-serif text-xl font-bold">Details</h3>
            <button onClick={onClose} className="text-white hover:text-thai-gold transition-colors">
                <IconClose className="w-6 h-6" />
            </button>
        </div>

        {/* Content */}
        <div className="p-6">
            <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-thai-gold/20 rounded-xl">
                   {isTransport ? <IconTransport className="w-8 h-8 text-thai-red" /> : <IconTicket className="w-8 h-8 text-thai-red" />}
                </div>
                <div>
                    <h4 className="font-bold text-gray-800 text-lg leading-tight">{activity.title}</h4>
                    <p className="text-sm text-gray-500 mt-1">{activity.time} • {activity.location}</p>
                </div>
            </div>

            {activity.bookingId && (
                <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-thai-gold opacity-10 rounded-bl-full -mr-8 -mt-8"></div>
                    <p className="text-xs uppercase text-gray-400 font-bold tracking-wider mb-1">Booking ID</p>
                    <p className="text-xl font-mono font-bold text-thai-red">{activity.bookingId}</p>
                </div>
            )}

            <div className="space-y-3">
                <p className="text-gray-600 text-sm leading-relaxed">
                   {activity.description || "No specific details available for this activity. Enjoy the moment!"}
                </p>
                
                <div className="pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-400 italic">
                        Tip: Show this screen to the staff if required.
                    </p>
                </div>
            </div>
            
            <button 
                onClick={onClose}
                className="w-full mt-6 bg-thai-red text-white font-bold py-3 rounded-xl shadow-lg hover:bg-red-900 transition-colors"
            >
                Close
            </button>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;