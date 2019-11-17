import React from 'react';
import style from './filter.module.css'

class Filter extends React.Component{
	constructor(props){
		super(props);
		this.changeSelect = this.changeSelect.bind(this);
	}

	changeSelect(option, value){
		this.props.onFilterChange(option, value);
	}

	render(){

		let selects = this.props.data
			.map((option)=><select key={option.prop} 
											className={style.sel}
											value={this.props.state[option.prop]}
											onChange={(e)=>this.changeSelect(option.prop, e.target.value)}>
											<option value="">{option.prop}</option>
											{option.value.map((val)=><option key={val}>{val}</option>)}
										</select>);
		
		return (
			<section className="filter">
				{selects}
			</section>
			)
	}
}

export default Filter;