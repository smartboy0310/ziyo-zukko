import React from 'react'

function GalleryHero({ localization }) {
  return (
    <>
         <section className="gallery-hero">
				<div className="container">
					<div className="gallery-hero__info">
						<h2 className="gallery-hero__heading">
							{localization.title}
						</h2>
						<p className="gallery-hero__discription">
							{localization.discription}
						</p>
					</div>
				</div>
			</section>
    </>
  )
}

export default GalleryHero
