
// Does not need anything fancy just needs to be able to send a email or fake sending an email cause its kinda a hassle (maybe emailjs?)
export default function Contact() {
	return (
		<main className="py-16 mx-24 my-8 rounded-lg px-36 mb-36 md:flex md:justify-between bg-secondl">
			<div>
				<h1 className="text-5xl font-bold font-rcb">Lets chat</h1>
				<div>
					<form className="w-1/2 font-ws">
						<div className="flex gap-10 my-8">
							<div className="py-2">
								<label htmlFor="name" className="text-2xl">Name</label>
								<div>
									<input type="text" id="name" name="name" className="px-3 py-4 text-xl rounded" />
								</div>
							</div>
							<div className="p-2">
								<label htmlFor="email" className="text-2xl">Email</label>
								<div>
									<input type="email" id="email" name="email" className="px-3 py-4 text-xl text-left rounded" />
								</div>
							</div>
						</div>
						<div className="my-5">
							<label htmlFor="message" className="text-2xl">Message</label>
							<div>
								<textarea className="px-1 py-3 text-xl rounded resize-none" id="message" name="message" rows={10} cols={51} />
							</div>
						</div>
						<button type="submit" className="px-16 py-5 my-6 text-2xl rounded-lg bg-primary">
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
