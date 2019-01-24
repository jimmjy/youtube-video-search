import React from 'react';

import './SearchBar.css';

class SearchBar extends React.Component {
	state = {
		term: '',
	};

	onInputChange = e => {
		this.setState({ term: e.target.value });
	};

	onFormSubmit = e => {
		e.preventDefault();
		//todo make sure we call callback from parent component
		this.props.onTermSubmit(this.state.term);
	};

	render() {
		return (
			<div className="ui segment search-bar">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label htmlFor="searchBar">Video Search</label>
						<div className="ui fluid action input">
							<input
								type="text"
								name="searchBar"
								onChange={this.onInputChange}
								value={this.state.term}
								placeholder="Search Videos..."
							/>
							<button class="ui button">Search</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
