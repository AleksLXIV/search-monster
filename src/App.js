import React from 'react'
import './App.css';
import { CardList } from './components/card-list/card-list.component.jsx'
import { SearchBox } from './components/search-box/search-box.component';

class App extends React.Component {
	constructor(){
		super();

		this.state = {
			monsters:[],
			searchField:''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({monsters: users}))
	}

	hadleChange = event =>{
		this.setState({searchField:event.target.value})
	}

	render(){
		const {monsters, searchField} = this.state
		const filtereMonster = monsters.filter(monster =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
			)

		return (
			<div className="app">
				<h1>Monster Rolodex</h1>
				<SearchBox 
					placeholder='search monster'
					hadleChange = {this.hadleChange}
				/>
				<CardList monster = {filtereMonster} />
			</div>
		  );
	}
}

export default App;
