import React from 'react';
import Gallery from './gallery/gallery.js';
import Service from './service/service.js';
import {Route} from 'react-router-dom';

function Content(props){
	let services = props.data;
	let handle =props.handleChangeCound;

	return (
		<main className="content">
			<Route exact path="/FitnessHouse/" render={(props)=><Gallery cards={services} {...props}/>} />
			<Route path="/FitnessHouse/service" render={(props)=><Service cards={services} handle={handle} {...props}/>} />
		</main>
		)
}
export default Content;
