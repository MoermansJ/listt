import "./Footer.css"
import ProjectsData from "../../Data/ProjectsData"

function Footer() {
	return (
		<div className="footer-flex">
			<div className="footer-social">
				<div className="gray">Social</div>
				<div>Twitter, facebook, linkedin ... icons</div>
			</div>
			<div className="footer-project">
				<div className="text gray">Latest project</div>
				<div className="subtitle">{ProjectsData[0].title}</div>
				<div className="text gray">{ProjectsData[0].description}</div>
			</div>
			<div className="footer-contact">
				<div className="text">
					<div className="gray">Telephone</div>
					<div>012 345 678</div>
				</div>
				<div className="text">
					<div className="gray">E-mail</div>
					<div>contact@listt.io</div>
				</div>
				<div className="text">
					<div className="gray">Address</div>
					<div>9882 South Street</div>
					<div>London</div>
					<div>EC48 1RF</div>
				</div>
			</div>
		</div >

	)
}

export default Footer