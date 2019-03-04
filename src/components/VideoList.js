import React from 'react'
import VideoItem from './VideoItem'


//lisat e videove qe do shfaqen
const VideoList = ({ videos, onVideoSelect }) => {
    const VideoRender = videos.map((video) => {
        console.log('show id:: ', video.id.videoId)
        return (
            <VideoItem 
            key={video.id.videoId} 
            onVideoSelect={onVideoSelect} //nqs ka div key nuk e mer
            Video={video} />
        );
    });
    return (
        <div>{VideoRender}</div>
    )
};

export default VideoList