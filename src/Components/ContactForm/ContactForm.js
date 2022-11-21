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
			<div className="contact-field" id="contact-from_name">
				<input
					type="text"
					placeholder="name"
					name="from_name"
					className="contact-field-input"
					required
				/>
				<img
					src="https://www.svgrepo.com/show/327461/person.svg"
					alt="name"
					className="contact-field-icon"
				/>
			</div>

			<div className="contact-field" id="contact-email">
				<input
					placeholder="e-mail"
					name="from_email"
					type="email"
					className="contact-field-input"
					required
				/>
				<img
					src="https://www.svgrepo.com/show/383303/email-address-sign-at-inbox.svg"
					alt="email address"
					className="contact-field-icon"
				/>
			</div>
			{/* 
  <div className="contact-field" id="contact-subject">
    <input
      type="text"
      placeholder="subject"
      className="contact-field-input"
      name="subject"
    />
  </div> */}

			<div className="contact-field" id="contact-message">
				<textarea
					type="text"
					placeholder="message"
					className="contact-field-input"
					name="message"
					required
				/>
			</div>

			{/* <div className="contact__asterisk">{"* = required"}</div> */}

			<button id="contact-send" ref={submitRef}>
				<div>SEND</div>
			</button>
		</form>
	)
}

export default ContactForm