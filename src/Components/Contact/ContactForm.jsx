import React from 'react'

function ContactForm() {
  return (
   <section className="contact-form">
   <div className="container">
      <div className="contact-form__info">
         <h2 className="contact-from__heading">
            Taklif va mulohazalar uchun
         </h2>

         <form className="contact-form__box">
            <h3 className="contact-form__title">
               Biz bilan bogʻlanish
            </h3>
            <input
               name="name"
               type="text"
               className="contact-form__input"
               placeholder="Ismingiz"
            />
            <input
               name="phone"
               type="text"
               className="contact-form__input"
               placeholder="Telefon raqamingiz"
            />
            <textarea
               className="contact-form__message"
               name="user_message"
               cols="30"
               rows="10"
               placeholder="Izoh"
            ></textarea>
            <button className="contact-from__btn">Joʻnatish</button>
         </form>
      </div>
   </div>
</section>
  )
}

export default ContactForm
