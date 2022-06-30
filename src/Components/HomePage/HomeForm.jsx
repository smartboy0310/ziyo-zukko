import React from 'react';

function HomeForm( { localization }) {
	return (
		<section className="home-form">
			<div className="container">
				<div className="home-form__info">
					<h2 className="home-from__heading">
						{localization.title}
					</h2>

					<form className="home-form__box">
						<h3 className="home-form__title">
								{localization.subtitle}
						</h3>
						<input
							name="name"
							type="text"
							className="form__input"
							required
							placeholder={localization.name}
						/>
						<input
							name="phone"
							type="text"
							className="form__input"
							required
							placeholder={localization.phone}
						/>
						<input
							name="class"
							type="text"
							className="form__input"
							required
							placeholder={localization.class}
						/>
						<textarea
							className="form__message"
							name="user_message"
							cols="30"
							rows="10"
							placeholder={localization.discription}
						></textarea>
						<button className="home-from__btn">{localization.button}</button>
					</form>
				</div>
			</div>
		</section>
	);
}

export default HomeForm;
