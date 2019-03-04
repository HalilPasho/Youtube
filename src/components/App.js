import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = {
        videos: [],
        videoSelect: null
    }

    componentDidMount() {
        this.onFormSub('cities');
    }
    onFormSub = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({
            videos: response.data.items,
            videoSelect: response.data.items[0]
        })
    }

    onVideoSelect = (videos) => {
        console.log('selected:: ', videos)
        this.setState({ videoSelect: videos })
    }

    render() {
        return (
            <div className="ui container"> <SearchBar onFormSub={this.onFormSub} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.videoSelect} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}



export default App