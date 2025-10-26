
import React from 'react';
import { Video } from '../types';

interface SidebarProps {
  videos: Video[];
  currentVideoId: string | null;
  onSelectVideo: (video: Video) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ videos, currentVideoId, onSelectVideo }) => {
  return (
    <aside className="w-full md:w-80 lg:w-96 bg-brand-surface text-brand-text flex flex-col">
      <div className="p-4 border-b border-brand-muted">
        <h2 className="text-xl font-bold flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          StreamHub Playlist
        </h2>
      </div>
      <div className="flex-1 overflow-y-auto">
        <ul className="p-2">
          {videos.map((video) => (
            <li key={video.id}>
              <button
                onClick={() => onSelectVideo(video)}
                className={`w-full text-left p-3 rounded-lg transition-all duration-200 ease-in-out flex items-start space-x-4 ${
                  currentVideoId === video.id
                    ? 'bg-brand-primary shadow-lg'
                    : 'hover:bg-brand-muted/50'
                }`}
              >
                <img src={video.thumbnailUrl} alt={video.title} className="w-24 h-14 object-cover rounded-md flex-shrink-0" />
                <div className="flex-1">
                  <h3 className={`font-semibold ${currentVideoId === video.id ? 'text-white' : 'text-brand-text'}`}>
                    {video.title}
                  </h3>
                  <p className={`text-sm ${currentVideoId === video.id ? 'text-blue-200' : 'text-brand-text-muted'}`}>
                    Video
                  </p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
