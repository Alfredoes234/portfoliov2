import { SubmitButton } from "@/components/submit"
import { mailing } from "@/utils/template/template"



// Does not need anything fancy just needs to be able to send a email or fake sending an email cause its kinda a hassle (maybe emailjs?)
export default function Contact() {

	return (
		<main className="m-24 md:flex md:justify-between">
			<div>
				<h1 className="text-4xl font-bold font-rcb">Lets chat</h1>
				<div className="py-5">
					<form >
						<label htmlFor="name">Name</label>
						<div>
							<input type="text" id="name" name="name" />
						</div>
						<label htmlFor="email">Email</label>
						<div>
							<input type="email" id="email" name="email" />
						</div>
						<label htmlFor="message">Message</label>
						<div>
							<input type="text" id="message" name="message" />
						</div>
						<button type="submit">
							Submit
						</button>
					</form>
				</div>
			</div>
			<div>
				<p>Asset</p>
			</div>
		</main>
	)
}
