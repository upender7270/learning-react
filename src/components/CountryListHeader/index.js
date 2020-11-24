import React from 'react';

class CountryListHeader extends React.Component {
	render() {
		const headerTextClassName =
			this.props.selectedTheme === 'light' ? 'text-black' : 'text-white';
		const btnTextClassName =
			this.props.selectedTheme === 'light' ? 'text-white' : 'text-black';
		return (
			<div className={`text-5xl ${headerTextClassName}`}>
				Header
				<button
					onClick={this.props.onChangeTheme}
					className={`text-5xl bg-blue-500 ml-5 font-bold py-2 px-4 rounded ${btnTextClassName}`}
				>
					{`${this.props.selectedTheme} mode`}
				</button>
			</div>
		);
	}
}

export default CountryListHeader;
