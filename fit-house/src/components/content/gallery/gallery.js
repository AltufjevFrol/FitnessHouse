import React from 'react';
import Card from './card/card.js'
import Filter from './filter/filter.js'

class Gallery extends React.Component {
	constructor(props){

		function getOptions(services){
			let arr = services.map((i)=>i.properties.map((i)=>i.title)).reduce((acc, i)=>{
			acc.push(...i);
			return acc;
			});

			let props = new Set(arr);

			props = Array.from(props);

			return props.map((i)=>{
							let select = {}
							select.prop = i;
							let options = new Set();
							for(let serv of services){
								for(let prop of serv.properties){
									if(prop.title === i){
										options.add(prop.value);
									}
								}
							}
							select.value = Array.from(options);
							return select;
						})
		}

		let optionsList = getOptions(props.cards);

		function getStates(list){
			let state = {};
			list.forEach((i)=>state[i.prop] = '');
			return state;
		}

		super(props);
		this.state = getStates(optionsList);
		this.optionsList = optionsList;
		this.handleFilter = this.handleFilter.bind(this)
	}

	handleFilter(option, value){
		this.setState({[option]: value})
	}

	getCards(cards, state){

		function arrPropToObj(arr){
			let result = {};
			arr.forEach((i)=>{
				result[i.title]=i.value;
			});
			return result;
	}

		return cards.filter((card)=>{
			let propsCard = arrPropToObj(card.properties);

			for(let propState in state){
				if(state[propState] === ''){
					continue;
				}else if(state[propState] !== propsCard[propState]){
					return false;
				}else{
					continue
				}

			}
			return true;
		});

	}

	render(){

		let allCards = this.props.cards;
		let state = this.state;
		let cards = this.getCards(allCards, state).map((card)=><Card key={card.title} card={card}/>);

	return (
		<section className="gallery">
			<Filter 
			data={this.optionsList} 
			state={this.state}
			onFilterChange={this.handleFilter}
			/>
			{cards}
		</section>
		);
	}
	
}
export default Gallery;