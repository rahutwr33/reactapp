import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} className="list"/>
    );
  })

  return (
    <ul className="list-group col col-sm-4" >
      {videoItems}
    </ul>
  );
};

export default VideoList;
