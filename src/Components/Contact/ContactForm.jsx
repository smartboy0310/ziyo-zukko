import React from 'react'

function ContactForm() {
  return (
   <section className="home-form">
   <div className="container">
      <div className="home-form__info">
         <h2 className="home-from__heading">
            Taklif va mulohazalar uchun
         </h2>

         <form className="home-form__box">
						<h3 className="home-form__title">
							Biz bilan bogʻlanish
						</h3>
						<input
							name="name"
							type="text"
							className="form__input"
							placeholder="Ismingiz"
						/>
						<input
							name="phone"
							type="text"
							className="form__input"
							placeholder="Telefon raqamingiz"
						/>
						<textarea
							className="form__message"
							name="user_message"
							cols="30"
							rows="10"
							placeholder="Izoh"
						></textarea>
						<button className="home-from__btn">Joʻnatish</button>
					</form>
      </div>
   </div>
</section>
  )
}

export default ContactForm
