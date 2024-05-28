import { db } from "@/utils/db/db";
import { projects } from "@/utils/db/schema";
import { eq } from "drizzle-orm";
import Markdown from "react-markdown";
import "./markdown-styles.css";


// Could check the url for the title and then search the database for the title to get the relevant data for the page
export default async function Project({ params }: { params: { title: string } }) {
	const { title } = params;
	const data = await db.select().from(projects).where(eq(projects.title, title));
	return (
		<main className="m-24">
			<h1 className="text-4xl font-bold capitalize font-rcb">{params.title || ""}</h1>
			<div>
				{data.map(function (pdata) {
					return (
						<div key={pdata.id}>
							<h2>{pdata.brief}</h2>
							<div className='markdown-body my-5'>
								<Markdown className="whitespace-pre-wrap">
									{pdata.content || ""}
								</Markdown>
							</div>
						</div>
					)
				})}
			</div>
		</main>
	)
}
