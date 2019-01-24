import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className='video-item item'>
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
        className='ui fluid image'
      />
      <div className='content video-item-header-container'>
        <div className='header'>{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
