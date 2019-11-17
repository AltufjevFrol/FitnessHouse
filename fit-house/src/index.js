import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let services;
fetch('https://raw.githubusercontent.com/fhcs/test-task-web/master/public/data/services.json')
	.then((res)=>{
		if (res.ok){
			return res.json();
		}
	})
		.then((servs)=>{
			services = servs.services;
			ReactDOM.render(<App data={services}/>, document.getElementById('root'));
		})
			.catch((e)=>console.log(e));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
