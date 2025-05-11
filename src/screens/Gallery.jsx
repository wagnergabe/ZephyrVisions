import React, { useState } from 'react';

const VideoCard = ({ title, videoUrl, thumbnailUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const getVideoId = (url) => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : null;
  };

  const videoId = getVideoId(videoUrl);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="bg-gray-100 shadow-md rounded-lg overflow-hidden">
      {isPlaying ? (
        <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <div className="cursor-pointer" onClick={handlePlay}>
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

const Gallery = () => {
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-logo-blue">Video Gallery</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/2 text-center space-y-9">
            <VideoCard
              title="Winter Drone Shots in New Hope, MN"
              videoUrl="https://youtu.be/hlzp04wIJVA"
              thumbnailUrl="https://img.youtube.com/vi/hlzp04wIJVA/maxresdefault.jpg"
              className="mb-6"
            />
            <VideoCard
              title="Warehouse Inventory"
              videoUrl="https://www.youtube.com/watch?v=PGh04Wp5Crg"
              thumbnailUrl="http://i3.ytimg.com/vi/PGh04Wp5Crg/hqdefault.jpg"
            />
                <VideoCard
            title="Spring Drone Cinematography in Duluth, MN"
            videoUrl="https://www.youtube.com/watch?v=RyxSgmNYPlI"
            thumbnailUrl="https://img.youtube.com/vi/RyxSgmNYPlI/maxresdefault.jpg"
          />
          </div>
        </div>
      </div>
    );
  };

  

export default Gallery;
