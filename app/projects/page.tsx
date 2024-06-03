import Link from "next/link";
import Image from "next/image";
import { db } from "@/utils/db/db";
import { projects } from "@/utils/db/schema";
import { Categories } from "@/components/button";

export default async function Projects() {
	const project = await db.select().from(projects);
	return (
		<main className="m-24">
			<div className="flex justify-between">
				<h1 className="my-5 text-4xl font-bold font-rcb">My projects</h1>
				<div className="my-5">
					<Categories />
				</div>
			</div>
			<div className="flex gap-12 py-10">
				{project.map(function (projects) {
					return (
						<Link href={`/projects/${projects.title}`} key={projects.id} className="w-1/3 p-8 transition duration-500 ease-in-out rounded-lg bg-secondl hover:bg-secondary ">
							<Image src={projects.img || "/images/baloon.webp"} width={1920} height={1080} alt={projects.imgAlt || ""} priority={true} className="w-full h-auto rounded" />
							<div className="my-5">
								<h2 className="text-xl font-semibold capitalize font-rcb">{projects.title}</h2>
								<p className="mb-10 font-ws">{projects.brief}</p>
							</div>
						</Link>
					)
				})}
			</div>
		</main>
	)
}
