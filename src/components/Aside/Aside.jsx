import './Aside.css'
import React from 'react';


class Aside extends React.Component {
	render() {
		return (
			<aside className='aside'>
				<nav className='aside__nav'>
					<a href='#' className='aside__link'>Profile</a>
					<a href='#' className='aside__link'>Messages</a>
					<a href='#' className='aside__link'>News</a>
					<a href='#' className='aside__link'>Music</a>
					<a href='#' className='aside__link'>Setings</a>
				</nav>
				<Friends />
			</aside>
		)
	}
}

class Friends extends React.Component {
	render() {
		return (
			<div className='aside__friends'>
				<h4 className='aside__title'>
					Friends
				</h4>
				<div className='aside__items'>
					<div className='aside__item item-aside'>
						<div className='item-aside__avatar'></div>
						<div className='item-aside__name'>Andrew</div>
					</div>
					<div className='aside__item item-aside'>
						<div className='item-aside__avatar'></div>
						<div className='item-aside__name'>Sasha</div>
					</div>
					<div className='aside__item item-aside'>
						<div className='item-aside__avatar'></div>
						<div className='item-aside__name'>Sveta</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Aside;
