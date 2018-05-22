import React from 'react'
import ReactDOM from 'react-dom'
import SearchBox from '../components/SearchBox'
import './App.css'
import CardList from '../components/CardList'
import MainButtons from '../components/MainButtons'
import Character from './Character'
import Planets from './Planets'
import App from './App';

class Starships extends React.Component {
	constructor() {
		super();
		this.state = {
			starships: [],
			searchField: '',
		};
	}
	

	//render different components based on which button is being clicked on
	onButtonClick = (event) => {
		if (event.target.value === 'Characters') {
			return ReactDOM.render(<Character />, document.getElementById('root'));
		} else if (event.target.value === 'Starships') {
			return ReactDOM.render(<Starships />, document.getElementById('root'));
		} else if (event.target.value === 'Planets') {
			return ReactDOM.render(<Planets />, document.getElementById('root'));
		} else {
			return ReactDOM.render(<App />, document.getElementById('root'));
		}
	}

	componentDidMount() {
		let APIrequests = [];

		//create an array of promises
		for (let i=1; i<5; i++) {
			let APIrequest = fetch(`https://swapi.co/api/starships/?page=${i}`)
				.then(response => {
					return response.json();
				})
			APIrequests.push(APIrequest);
		}

		//pass the array of promises and once they are all resolved flatten them to get an array of elements and add them to state
		Promise.all(APIrequests)
			.then(values => {
				values = values.map(item => item.results);
				values = [].concat.apply([], values);
				this.setState({starships: values})
			})
			.catch(error => console.log(error))
	}

	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value })
	}

	render() {
		let { starships, searchField } = this.state;
		let filteredStarships = starships.filter(item => {
			return item.name.toLowerCase().includes(searchField.toLowerCase());
		});
		return (!starships.length) ? 
		<h1 className="tc pv5">Loading, please wait</h1> : 
		(  
		<div>
			<MainButtons clickEvent={this.onButtonClick}/> 
			<div className='tc'>
				<h1>Star wars starship search</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<CardList filtered={filteredStarships}/>
			</div>
		</div>
		)
	}
}

export default Starships;