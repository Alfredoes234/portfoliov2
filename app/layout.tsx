import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { AiOutlineMenu, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export const metadata: Metadata = {
  title: "Rain",
  description: "My developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className="bg-white">
        <nav className="sticky z-50 px-5 py-4 mx-5 duration-100 ease-in-out bg-white rounded md:py-8 md:mx-20 outline font-ws top-5 drop-shadow">
          <div className="flex justify-between">
            <Link href={"/"} className="relative text-3xl md:inline md:transition group">
              <p className="hidden md:inline group-hover:text-black2">Home</p>
              <span className="absolute left-0 w-0 h-2 transition-all -bottom-1 group-hover:w-full bg-accent"></span>
            </Link>
            <div className="hidden gap-10 text-2xl md:flex">
              <Link href="/projects" className="relative group"><p className="group-hover:text-black2">Projects</p><span className="absolute left-0 w-0 h-2 transition-all -bottom-1 group-hover:w-full bg-accent"></span></Link>
              <Link href="/about-me" className="relative group"><p className="group-hover:text-black2">About Me</p><span className="absolute left-0 w-0 h-2 transition-all -bottom-1 group-hover:w-full bg-accent"></span></Link>
              <Link href="/contact" className="relative group"><p className="group-hover:text-black2">Contact</p><span className="absolute left-0 w-0 h-2 transition-all -bottom-1 group-hover:w-full bg-accent"></span></Link>
            </div>
            <div className="right-0 md:hidden">
              <button>
                <AiOutlineMenu size={46} />
              </button>
            </div>
          </div>
        </nav>
        {children}
        <footer className="p-10 font-wf bg-accent">
          <div className="flex gap-5 py-2">
            <Link href="https://github.com/Alfredoes234" aria-label="Github profile"><AiFillGithub size={46} /></Link>
            <Link href="https://www.linkedin.com/in/alfierayner" aria-label="Linkedin profile"><AiFillLinkedin size={46} /></Link>
          </div>
          <p>© Alfie Rayner. All Rights Reserved</p>
        </footer>
      </body>
    </html>
  );
}
