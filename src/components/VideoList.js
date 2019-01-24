import React from "react";
import VideoItem from "./VideoItem";
import "./VideoList.css";

const VideoList = ({ videos, onVideoSelect }) => {
  return (
    <div className='ui relaxed divided list segment controlled-height'>
      {videos.map(video => {
        return (
          <VideoItem
            key={video.id.videoId}
            video={video}
            onVideoSelect={onVideoSelect}
          />
        );
      })}
    </div>
  );
};

export default VideoList;
