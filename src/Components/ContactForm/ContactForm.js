import "./ContactForm.css"
import { useRef, useState } from "react"

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
				<label htmlFor="name">NAME</label>
				<input type="text" id="name" name="name" required />
				<label htmlFor="email">E-MAIL</label>
				<input type="email" id="email" name="email" required />
				<label htmlFor="message">MESSAGE</label>
				<textarea id="message" name="message" required />
				<button type="submit" id="submit" name="submit">SUBMIT</button>
			</div >

		</form >
	)
}

export default ContactForm



