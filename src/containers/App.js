import React from 'react'
import MainButtons from '../components/MainButtons'
import './App.css'
import Character from './Character'
import Starships from './Starships'
import Planets from './Planets'
import ReactDOM from 'react-dom'

class App extends React.Component {
	/*constructor() {
		super();
	}*/

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

	//render basic components with three buttons included
	render() {
		return ( 
		<div className='tc'>
			<h1>Star Wars</h1>
			<p style={{color: 'white'}}>Search for:</p>
			<MainButtons clickEvent={this.onButtonClick}/> 
		</div>
		)
	}
}

export default App;