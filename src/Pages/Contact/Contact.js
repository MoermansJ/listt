import "./Contact.css"
import ContactForm from "../../Components/ContactForm/ContactForm";

function Contact() {
	return (
		<div className="contact-grid">
			{/* <img src={"./images/green.jpg"} className="banner" alt="banner" /> */}
			<div className="contact-form"><ContactForm /></div>
		</div>
	);
}

// image source: Photo by Quang Nguyen Vinh: https://www.pexels.com/photo/bunch-of-bok-choi-2518893/
// Photo by Anna Shvets: https://www.pexels.com/photo/crop-gardener-with-topsoil-on-hand-5231239/
// sunflowers Photo by Lisa Gromova: https://www.pexels.com/photo/a-field-of-sunflowers-13076947/

export default Contact;
