
// Could check the url for the title and then search the database for the title to get the relevant data for the page
export default function Project({ params }: { params: { title: string } }) {
	return (
		<main>
			<p>hun</p>
			<p>{params.title}</p>
		</main>
	)
}
