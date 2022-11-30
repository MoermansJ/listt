import "./Footer.css"
import ProjectsData from "../../Data/ProjectsData"

function Footer() {
	return (
		<div className="footer-flex">
			<div className="footer-socials">
				<div>Social</div>
				<div>Twitter, facebook, linkedin ... icons</div>
			</div>
			<div className="footer-project">
				<div>Latest project</div>
				<div>{ProjectsData[0].title}</div>
			</div>
			<div className="footer-contact">
				<div>
					<div>telephone</div>
					<div>012 345 678</div>
				</div>
				<div>
					<div>e-mail</div>
					<div>abc@def.ghi</div>
				</div>
				<div>
					<div> address</div>
					<div>Parkstreet 1</div>
				</div>
			</div>
		</div >

	)
}

export default Footer