import './VideoItem.css'
import React from 'react'

//secila video qe do shfaqet vecmas
const videoItem = ({ Video,onVideoSelect }) => {
    return (
        <div onClick={()=>onVideoSelect(Video)} className="video-item item">
            <img className="ui image" src={Video.snippet.thumbnails.high.url} alt={Video.snippet.description} />
            <div className="content">
                <div className="header">{Video.snippet.title}</div>
            </div>
        </div>
    )
}


export default videoItem