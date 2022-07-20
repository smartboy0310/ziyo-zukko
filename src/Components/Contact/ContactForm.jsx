import React from 'react'
import { useSelector } from 'react-redux';

function ContactForm({ localization }) {

	const {
		count: { lang },
	} = useSelector((state) => state);

	const handleSubmit = (evt) => {
		evt.preventDefault()
		const { name, phone, user_message } = evt.target.elements
		
		fetch('https://school.my-portfolio.uz/appeals/' + lang, {
			method: "POST",
			body: JSON.stringify({
				applicant_name: name.value, 
				applicant_phone: phone.value, 
				applicant_content: user_message.value
			}),
			headers: { "Content-Type": "application/json", },
	  })
			.then((res) => res.json())
			.then((data) => {
				 if (data) {
					  if (data.status === 200) {
							alert("So'rovingiz qabul qilindi!   Ваш запрос принят!");
							console.log(data);
					  } else {
							alert(data.message);
							console.log(data);
					  }
				 }
			});
	}

  return (
   <section className="home-form">
   <div className="container">
      <div className="home-form__info">
         <h2 className="home-from__heading">
				{ localization.title }
         </h2>

         <form 
				onSubmit = {handleSubmit}
				className="home-form__box">
						<h3 className="home-form__title">
							{ localization.subtitle }
						</h3>
						<input
							name="name"
							type="text"
							className="form__input"
							placeholder={ localization.name }
						/>
						<input
							name="phone"
							type="text"
							className="form__input"
							placeholder={ localization.phone }
						/>
						<textarea
							className="form__message"
							name="user_message"
							cols="30"
							rows="10"
							placeholder={ localization.discription }
						></textarea>
						<button className="home-from__btn">{ localization.button }</button>
					</form>
      </div>
   </div>
</section>
  )
}

export default ContactForm
