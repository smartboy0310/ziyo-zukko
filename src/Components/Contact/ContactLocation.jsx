import React from 'react';
import Image from 'next/image';

import loc_img from '../../Assets/images/map_loc.png';
import Link from 'next/link';
function ContactLocation({ localization }) {
	return (
		<>
			<section className="contact-location">
				<div className="container">
					<h2 className="contact-location__heading">
						{localization}
					</h2>
					<a className="location__link" href="https://2gis.uz/uz/tashkent/firm/70000001036919062?m=69.257373%2C41.323764%2F17.21%2Fp%2F45" target="example" rel="noopener">
						<Image
							className="location__image"
							src={loc_img}
							alt="Location info"
							layout="intrinsic"
						/>
					</a>
				</div>
			</section>
		</>
	);
}

export default ContactLocation;
