import "./ContactForm.css";
import { useRef, useState } from "react";

function ContactForm() {
	const formRef = useRef();
	const submitRef = useRef();

	const sendEmail = e => {
		e.preventDefault();

		// emailjs
		// 	.sendForm(
		// 		"service_vt9g7uk",
		// 		"template_u8n0mo6",
		// 		formRef.current,
		// 		"eEXc6xmI1Id-Ggl_0"
		// 	)
		// 	.then(
		// 		result => {
		// 			console.log(result.text);
		// 		},
		// 		error => {
		// 			console.log(error.text);
		// 		}
		// 	);
	};

	const [formInput, setFormInput] = useState({
		from_name: "",
		from_email: "",
		subject: "",
		message: "",
	});

	const handleChange = e => {
		const propertyKey = e.target.getAttribute("name");
		const propertyValue = e.target.value;

		setFormInput({ ...formInput, [propertyKey]: propertyValue });
	};

	return (
		<form
			id="contact-form"
			ref={formRef}
			onSubmit={sendEmail}
			onChange={handleChange}
		>
			<div className="form-grid">
				<label htmlFor="name">Full Name</label>
				<input
					type="text"
					id="name"
					name="name"
					placeholder="Your full name"
					required
				/>

				<label htmlFor="company">Company</label>
				<input
					type="text"
					id="company"
					name="company"
					placeholder="Your company name"
				/>


				<label htmlFor="email">E-mail</label>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="Your e-mail address"
				/>

				<label htmlFor="phone">Phone Number</label>
				<input
					type="text"
					id="phone"
					name="phone"
					placeholder="Your phone number"
				/>

				<label htmlFor="message">Message</label>
				<textarea
					id="message"
					name="message"
					placeholder="Your message"
					required
				/>
				<button type="submit" id="submit" name="submit">
					SUBMIT
				</button>
			</div>
		</form>
	);
}

export default ContactForm;
