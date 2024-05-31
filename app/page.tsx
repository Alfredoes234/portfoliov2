import { db } from "@/utils/db/db";
import { skills, projects } from "@/utils/db/schema";
import Image from "next/image";
import Link from "next/link";
import { GrLinkUp } from "react-icons/gr";

const skills_items = [
  {
    "id": 1,
    "name": "React",
    "img": "/images/react-js-icon.svg",
    "imgalt": "React Icon",
    "url": "https://react.dev/"
  },
  {
    "id": 2,
    "name": "MySQL",
    "img": "",
    "imgalt": "",
    "url": ""
  }
];

const latest_projects = [
  {
    id: 1,
    title: "Blurb",
    brief: "blurber",
    img: ""
  },
  {
    id: 2,
    title: "Blub",
    brief: "blubber",
    img: ""
  }
]


export default async function Home() {
  const skill = await db.select().from(skills);
  const project = await db.select().from(projects).limit(3);
  return (
    <main className="z-0 my-5 md:my-36">
      <div className="md:flex md:justify-between md:items-center mx-24 my-36">
        <div>
          <div>
            <div>
              <h1 className="text-5xl font-bold md:text-6xl font-rcb">I&apos;m Alfie Rayner,<br />fullstack developer</h1>
              <p className="my-5 text-xl md:text-4xl">I make websites</p>
            </div>
          </div>
          <div className="flex gap-5 my-10 md:text-2xl">
            <Link href="contact" className="px-3 py-2 rounded md:py-6 md:px-16 bg-secondl">Contact Me</Link>
            <Link href="projects" className="flex items-center gap-2 px-3 py-2 rounded md:py-6 md:px-16 bg-primary" >View My Projects <span><GrLinkUp size={20} className="rotate-[50deg]" /></span></Link>
          </div>
        </div>
        <div className="hidden lg:inline p-56 bg-secondl rounded-full text-xs">
          <p>Picture</p>
        </div>
      </div>
      

      <div className="p-10 text-center bg-secondl">
        <h2 className="text-4xl font-semibold font-rcb">What I am experienced in</h2>
        <div className="flex justify-center gap-12 py-10">
          {skill.map(function (data) {
            return (
              <div key={data.id}>
                <Link href={data.url || ""}><Image src={data.img || ""} alt={data.imgAlt || ""} width={10} height={10} title={data.title || ""} className="w-24 h-24" /></Link>
              </div>
            )
          })}
        </div>
      </div>
      <div className="m-24">
        <h2 className="text-4xl font-semibold font-rcb px-4">Statistics</h2>
        <div className="flex">
          <div>
            <div className="flex gap-5">
              <div className="w-1/2">
                <Image src="/images/api.svg" alt="Github stats" width={1920} height={1080} className="rounded-lg m-3" />
              </div>
              <div className="bg-secondl p-36 m-3 rounded-lg w-1/2 ">
                <p>2</p>
              </div>
            </div>
            <div className="bg-secondl p-48 m-3 rounded-lg">
              <p>3</p>
            </div>
          </div>
          <div className="bg-secondl p-64 m-3 rounded-lg">
            <p>4</p>
          </div>
        </div>
      </div>
      <div className="m-24">
        <h2 className="text-4xl font-semibold font-rcb">Latest Projects</h2>
        <div className="flex gap-12 py-5">
          {project.map(function (projects) {
            return (
              <Link href={`/projects/${projects.title}`} key={projects.id} className="p-10 rounded-xl bg-secondary">
                <Image src={projects.img || "/images/baloon.webp"} width={1920} height={1080} alt={projects.imgAlt || ""} priority={true} className="w-48 h-auto rounded" />
                <div className="my-10">
                  <h3 className="text-2xl font-semibold capitalize">{projects.title}</h3>
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
