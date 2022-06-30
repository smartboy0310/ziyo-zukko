import React from 'react';

function ContactHero({ localization }) {
	return (
		<>
			<section className="contact-hero">
				<div className="container">
					<div className="contact-hero__info">
						<h2 className="contact-hero__heading">
							{localization.title}
						</h2>
						<p className="contact-hero__discription">
							{localization.discription}
						</p>
					</div>
				</div>
			</section>
		</>
	);
}

export default ContactHero;
