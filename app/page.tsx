import { db } from "@/utils/db/db";
import { skills, projects } from "@/utils/db/schema";
import Image from "next/image";
import Link from "next/link";
import { GrLinkUp } from "react-icons/gr";

export default async function Home() {
	const skill = await db.select().from(skills);
	const project = await db.select().from(projects).limit(3);
	return (
		<main className="z-0">
			<div className="mx-24 md:flex md:justify-between md:items-center md:my-36">
				<div>
					<div>
						<div>
							<h1 className="text-5xl font-bold md:text-6xl font-rcb">I&apos;m Alfie Rayner,<br />fullstack developer</h1>
							<p className="my-5 text-xl md:text-4xl">I make websites</p>
						</div>
					</div>
					<div className="flex gap-5 my-10 md:text-2xl">
						<Link href="contact" className="inline-block px-3 py-2 transition-transform duration-200 rounded hover:-translate-y-0.5 z-1 md:py-6 md:px-16 whitespace-nowrap bg-secondl">Contact Me</Link>
						<Link href="projects" className="flex items-center gap-2 px-3 py-2 transition ease-in rounded z-2 md:py-6 md:px-16 hover:-translate-y-0.5 hover:duration-200 bg-primary" >View My Projects <span><GrLinkUp size={20} className="rotate-[50deg]" /></span></Link>
					</div>
				</div>
				<div className="hidden p-56 text-xs rounded-full lg:inline bg-secondl">
					<p>Picture</p>
				</div>
			</div>
			<div className="px-10 text-center bg-priml md:my-56 md:py-16">
				<h2 className="text-4xl font-semibold font-rcb">What I am experienced in</h2>
				<div className="flex justify-center gap-12 py-24">
					{skill.map(function (data) {
						return (
							<div key={data.id} className="transition-all duration-500 ease-in-out hover:scale-105">
								<Link href={data.url || ""}><Image src={data.img || ""} alt={data.imgAlt || ""} width={10} height={10} title={data.title || ""} className="w-24 h-24" /></Link>
							</div>
						)
					})}
				</div>
			</div>
			<div className="mx-24 md:my-48">
				<h2 className="px-4 text-4xl font-semibold font-rcb">Statistics</h2>
				<div className="flex">
					<div>
						<div className="flex gap-5">
							<div className="w-1/2">
								<Image src="/images/api.svg" alt="Github stats" width={1920} height={1080} className="m-3 rounded-lg" />
							</div>
							<div className="w-1/2 m-3 rounded-lg bg-secondl p-36 ">
								<p>2</p>
							</div>
						</div>
						<div className="m-3 rounded-lg bg-secondl p-36">
							<p>3</p>
						</div>
					</div>
					<div className="p-56 m-3 rounded-lg bg-secondl">
						<p>4</p>
					</div>
				</div>
			</div>
			<div className="mx-24 md:my-56">
				<h2 className="text-4xl font-semibold font-rcb">Latest Projects</h2>
				<div className="flex gap-12 py-5">
					{project.map(function (projects) {
						return (
							<Link href={`/projects/${projects.title}`} key={projects.id} className="w-1/3 p-8 transition duration-1000 ease-in-out rounded-lg bg-secondl hover:bg-secondary">
								<Image src={projects.img || "/images/baloon.webp"} width={720} height={1280} alt={projects.imgAlt || ""} priority={true} className="w-full h-auto rounded" />
								<div className="my-10">
									<h3 className="text-2xl font-semibold capitalize text-wrap">{projects.title}</h3>
									<p>{projects.brief}</p>
								</div>
							</Link>
						)
					})}
				</div>
			</div>
		</main>
	);
}
