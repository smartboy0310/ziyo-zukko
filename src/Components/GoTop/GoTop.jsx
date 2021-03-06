import React, { useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use';

function GoTop() {
	const { y: pageYOffset } = useWindowScroll();
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		if (pageYOffset > 500) {
			setVisible(true);
		} else {
			setVisible(false);
		}
	}, [pageYOffset]);

	const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

	if (!visible) {
		return false;
	}
	return (
		<>
			<div className="scroll__go-top" onClick={scrollToTop}>
				<svg
					className="svg-icon "
					viewBox="0 0 1024 1024"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M683.52 597.333a33.997 33.997 0 0 1-24.132-10L512.853 440.814 366.32 587.332a34.133 34.133 0 1 1-48.265-48.264L488.721 368.4a34.133 34.133 0 0 1 48.265 0l170.666 170.667a34.133 34.133 0 0 1-24.132 58.265z"
						fill="#2C6BAF"
					/>
					<path
						d="M512.853 955.733H512c-121.89 0-227.584-43.878-314.146-130.44C111.872 739.277 68.267 633.89 68.267 512c0-121.856 43.588-227.55 129.536-314.112C284.45 111.855 390.144 68.267 512 68.267c121.907 0 227.294 43.605 313.259 129.587C911.838 284.399 955.733 390.093 955.733 512c0 121.924-43.912 227.345-130.491 313.344-85.914 86.494-191.028 130.39-312.389 130.39zM512 102.4c-112.52 0-210.125 40.243-290.065 119.62C142.643 301.875 102.4 399.48 102.4 512c0 112.503 40.226 209.783 119.586 289.16C301.91 881.085 399.496 921.6 512 921.6h.853c111.94 0 208.913-40.5 288.24-120.405C881.082 721.766 921.6 624.503 921.6 512c0-112.52-40.533-210.09-120.474-290.014C721.783 142.626 624.521 102.4 512 102.4z"
						fill="#2C6BAF"
					/>
				</svg>
			</div>
		</>
	);
}

export default GoTop;
