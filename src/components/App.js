import React from 'react';
import SearchBar from './SearchBar.js';
import youtube from '../api/youtube.js';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import './App.css';

class App extends React.Component {
	state = {
		videos: [],
		selectedVideo: null,
	};

	componentDidMount() {
		this.onTermSubmit('cobus kelly clarkson');
	}

	onVideoSelect = video => {
		this.setState({ selectedVideo: video });
	};

	onTermSubmit = async term => {
		const response = await youtube.get('/search', {
			params: {
				q: term,
			},
		});

		const { items } = response.data;

		//to sort out playlists and channels from results
		const sortedItems = items.filter(item => {
			return item.id.videoId;
		});

		this.setState({ videos: sortedItems, selectedVideo: items[3] });
	};

	render() {
		return (
			<div className="ui container">
				<div className="ui center aligned segment">YouTube video search</div>
				<SearchBar onTermSubmit={this.onTermSubmit} />
				<div className="ui stackable two column grid">
					<div className="ten wide column">
						<VideoDetail selectedVideo={this.state.selectedVideo} />
					</div>
					<div className="six wide column">
						<VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
