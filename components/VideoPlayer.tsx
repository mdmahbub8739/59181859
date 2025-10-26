
import React from 'react';
import { Video } from '../types';

interface VideoPlayerProps {
  video: Video | null;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ video }) => {
  if (!video) {
    return (
      <div className="flex-1 p-4 md:p-8 flex items-center justify-center bg-brand-bg">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-brand-text">Welcome to StreamHub</h2>
          <p className="text-brand-text-muted mt-2">Select a video from the list to start watching.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 p-4 md:p-8 bg-brand-bg flex flex-col">
      <div className="w-full aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
        <iframe
          key={video.id}
          className="w-full h-full"
          src={video.embedUrl}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="mt-6">
        <h1 className="text-3xl font-extrabold text-brand-text tracking-tight">{video.title}</h1>
        <p className="mt-3 text-brand-text-muted text-lg max-w-3xl">{video.description}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
