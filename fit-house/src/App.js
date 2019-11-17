import React from 'react';
import './App.css';
import Header from './components/header/header.js'
import Content from './components/content/content.js'
import {BrowserRouter} from 'react-router-dom';

class App extends React.Component{

	constructor(props){
		super(props);
		this.state = {count: 0};
		this.changeCount = this.changeCount.bind(this);
	}

	changeCount(){
		let newCount = this.state.count + 1;
		this.setState({count: newCount})
	}


	render(){
		return (
			<BrowserRouter>
					<div className="App">
						<Header basket={this.state}/>
						<Content data={this.props.data} handleChangeCound={this.changeCount}/>
					</div>
			</BrowserRouter>
		);
	}

}

export default App;
