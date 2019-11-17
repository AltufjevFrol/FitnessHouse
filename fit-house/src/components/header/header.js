import React from 'react';
import style from './header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {NavLink} from 'react-router-dom';
class Header extends React.Component {
	render(){
		return (
				<header className="header">
					<div className="headerContent">
						<nav className={style.name}><NavLink to='/FitnessHouse/'> Fitness House Market </NavLink></nav>
						<div className={style.basket}><span id="counter">{this.props.basket.count}</span><FontAwesomeIcon icon={faShoppingCart} className={style.icon}/>Корзина</div>
					</div>
				</header>
			);
	}
}

export default Header;
