import React from 'react'

function NewsHero({ localization }) {
  return (
    <>
      <section className="news-hero">
         <div className="container">
         <div className="news-hero__info">
						<h2 className="news-hero__heading">
                {localization.title}
						</h2>
						<p className="news-hero__discription">
                {localization.discription}
						</p>
					</div>
         </div>
      </section>
    </>
  )
}

export default NewsHero
