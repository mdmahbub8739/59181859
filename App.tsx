
import React, { useState, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import VideoPlayer from './components/VideoPlayer';
import { videoData } from './data/videos';
import { Video } from './types';

const App: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(videoData[0] || null);

  const handleSelectVideo = useCallback((video: Video) => {
    setSelectedVideo(video);
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-brand-bg font-sans">
      <Sidebar 
        videos={videoData} 
        currentVideoId={selectedVideo?.id || null} 
        onSelectVideo={handleSelectVideo} 
      />
      <main className="flex-1 flex flex-col overflow-y-auto">
        <VideoPlayer video={selectedVideo} />
      </main>
    </div>
  );
};

export default App;
