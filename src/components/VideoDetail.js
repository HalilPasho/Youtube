import React from 'react'

//formatojm si do shfaqet vidoplayer dhe titulli , pershkrimi per scilen video
const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Loading</div>
    }

    const videourl = `https://youtube.com/embed/${video.id.videoId}`
    return (
        <div>
        <div className="ui embed">
        <iframe title="video player" src={videourl} />
        </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>

    )
}

export default VideoDetail