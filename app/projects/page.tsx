import Link from "next/link";
import Image from "next/image";
import { db } from "@/utils/db/db";
import { projects } from "@/utils/db/schema";



export default async function Projects() {
	const project = await db.select().from(projects); 
	return (
		<main className="m-24">
			<h1 className="my-5 text-4xl font-bold font-rcb">My projects</h1>
			<div className="flex gap-10 my-5">
				{project.map(function (projects) {
					return (
						<Link href={`/projects/${projects.title}`} key={projects.id} className="w-1/4">
							<Image src={projects.img || "/images/baloon.webp"} width={1920} height={1080} alt={projects.imgAlt || ""} priority={true} className="h-auto w-full" />
							<h2>{projects.title}</h2>
							<p>{projects.brief}</p>
						</Link>
					)
				})}
			</div>
		</main>
	)
}
