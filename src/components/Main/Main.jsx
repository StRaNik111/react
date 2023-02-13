import './Main.css';
import React from "react";

const Main = () => {
	return (
		<main className='main'>
			<CurrentUser />
			{/* <Posts /> */}
		</main>
	)
}

class CurrentUser extends React.Component {
	render() {
		return (
			<section className='current-user'>
				<div className='current-user__img'>
					<img src='https://images.unsplash.com/photo-1675548609916-b253bc5057b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80' />
				</div>
				<div className='current-user__content'>
					<div className='current-user__body'>
						<div className='current-user__avatar'></div>
						<div className='current-user__info user-info' >
							<div className='user-info__name'>Dmitry K.</div>
							<p className='user-info__text'>Date of birthday: 2 january</p>
							<p className='user-info__text'>City: Minsk</p>
							<p className='user-info__text'>Education: BSU`11</p>
							<p className='user-info__text'>Web Site: http://..........</p>
						</div>

					</div>
				</div>
			</section>
		)
	}
}

const Posts = () => {
	return (
		<section className='posts'>
			<h3 className='posts__title'>
				My posts
			</h3>
			<form className='posts__form' method='#'>
				<input className='posts__form__input' placeholder='your news...' />
				<button className='posts__form__btn'>Send</button>
			</form>
			<div className='posts__items'>
				<div className='posts__item item-posts'>
					<div className='item-posts__img'></div>
					<div className='item-posts__text'>Hey, why nobody love me?</div>
				</div>
				<div className='posts__item item-posts'>
					<div className='item-posts__img'></div>
					<div className='item-posts__text'>It`s our new program!Hey!</div>
				</div>
			</div>
		</section>
	)
}

export default Main;