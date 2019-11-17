import React from 'react';
import style from './service.module.css';

class Service extends React.Component{

	render(){
		let path = this.props.location.pathname.split('/');
		let alias = path[path.length-1];
		let service = this.props.cards.filter((card)=>card.alias === alias)[0];

		let image = service.image;
		let title = service.title;
		let description = service.description;
		let properties = service.properties
											.map((i)=><p key={i.title} className={style.property}>
																	<span className={style.name}>{`${i.title} - `}</span>
																	<span className={style.value}>{i.value}</span>
																</p>);
		let price = `${service.price}`;
		price = `${price.slice(0,1)} ${price.slice(1)}`;
		
		return(
						<article className="service">
								<figure className={style.img}><img src={image} alt={title}/></figure>
								<div className={style.info}>
									<h1 className={style.title}>{title}</h1>
									<p className={style.description}>{description}</p>
									{properties}
									<div className={style.buy}>
										<div className={style.price}>
											<span className={style.num}>{price}</span>
											<span className={style.money}>руб.</span>
										</div>
										<div className={style.botton} onClick={this.props.handle}>Купить</div>
									</div>
								</div>
						</article>
			);
	}

}

export default Service