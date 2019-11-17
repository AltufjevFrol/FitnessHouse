import React from 'react';
import style from './card.module.css';
import {NavLink} from 'react-router-dom';

function Card(props){
	let image = props.card.image;
	let title = props.card.title;
	let description = props.card.description.length>100 ? `${props.card.description.slice(0,100)}...`: props.card.description;
	let tags = props.card.properties.map((i)=><div key={i.title} className={style.tag}>{`#${i.value}`}</div>);
	let alias = props.card.alias

	return (
					<article className={style.card}>
							<figure className={style.img}>
							<NavLink to={`/FitnessHouse/service/${alias}`}>
							<img src={image} alt={title}/>
							</NavLink>
							</figure>
							<div className={style.info}>
								<h1 className={style.title}>{title}</h1>
								<p className={style.description}>{description}</p>
								{tags}
							</div>
					</article>
		);
}

export default Card;