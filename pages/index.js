import Head from "next/head";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
// import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10">
        <section className="h-screen ">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">Jake Schaefbauer</h1>
            <ul className="flex items-center">
              <li><BsFillMoonStarsFill className="cursor-pointer text-2xl"/></li>
              <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a></li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">Jake Schaefbauer</h2>
            <h3 className="text-2xl py-2">Full-Stack Web Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">Full-Stack Web developer looking to offer my services. Always open to learning and challenging myself everyday. My skillsets include, but not limited to: HTML5,CSS3, JavaScript, React, MongoDB, SQL, MySQL, Express, and GIT</p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillGithub />
          </div>
          <div className="">

          </div>
        </section>
        
        <section>
          <div>
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p>
              I am a recent graduate from the University of Minnesota Full-Stack Web Development Bootcamp. Because of that, services I can offer are: front-end, back-end, or full-stack web development
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
