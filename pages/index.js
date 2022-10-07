import Head from "next/head";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import { useState } from "react";
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import Image from "next/image";
import image1 from "../public/web1.png";
import image2 from "../public/web2.png";
import image3 from "../public/web3.png";
import image4 from "../public/web4.png";
import image5 from "../public/web5.png";
import image6 from "../public/web6.png";
import headshot from "../public/headshot.jpg";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Jake Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className=" bg-white px-10 md:px-20 lg:40-px dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl font-burtons">Jake Schaefbauer</h1>
            <ul className="flex items-center">
              <li>
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className="cursor-pointer text-2xl"
                />
                </li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="https://drive.google.com/file/d/1fZEVjhez2_K4eV36uRseuLAFIJtTe6Ty/view?usp=sharing" target="_blank" rel="noreferrer">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 dark:text-teal-400 font-medium md:text-6xl">Jake Schaefbauer</h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-200">Full-Stack Web Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl max-w-xl mx-auto">Full-Stack Web developer looking to offer my services. Always open to learning and challenging myself everyday. My skillsets include, but not limited to: HTML5,CSS3, JavaScript, React, MongoDB, SQL, MySQL, Express, and GIT</p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a href="https://twitter.com/MrCoolJakey" target="_blank" rel="noreferrer"><AiFillTwitterCircle /></a>
            <a href="https://www.linkedin.com/in/jacobschaefbauer/" target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
            <a href="https://github.com/jschaefmn" rel="noreferrer" target="_blank"><AiFillGithub /></a>
          </div>
          <div className="mx-auto rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
            <Image src={headshot} layout="fill" objectFit="cover"></Image>
          </div>
        </section>
        
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-80 dark:text-gray-200">
              I am a recent graduate from the University of Minnesota Full-Stack Web Development Bootcamp. Because of that, services I can offer are: front-end, back-end, or full-stack web development.
            </p>
          </div>
        </section>

        {/* portfolio section */}
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
          </div>

          {/* container for images */}
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">

            <div className="relative basis-1/3 flex-1">
              <a href="https://github.com/jschaefmn/e-commerce-back-end" target="_blank" className="transition ease-in-out delay-80 hover:scale-110 hover:opacity-50" rel="noreferrer">
                <Image src={image1} className="rounded-3xl object-cover" width={"100%"} height={"45"} layout="responsive"/>
                <div className="absolute w-full py-2.5 bottom-0 inset-x-0 bg-white opacity-70 text-black text-xs text-center leading-4 rounded-b-3xl">
                  <h3 className="text-3xl">E-Commerce Backend</h3>
                  <p className="text-lg">- Express.js, MySQL, Sequelize</p>
                </div>
              </a>
            </div>

            <div className="relative basis-1/3 flex-1">
              <a href="https://workout-tracker-app2.herokuapp.com/" className="transition ease-in-out delay-80 hover:scale-110 hover:opacity-50" rel="noreferrer" target="_blank"> 
                <Image src={image2} className="rounded-3xl object-cover" width={"100%"} height={"45"} layout="responsive"/>
                <div className="absolute w-full py-2.5 bottom-0 inset-x-0 bg-white opacity-70 text-black text-xs text-center leading-4 rounded-b-3xl">
                  <h3 className="text-3xl">Workout Tracker</h3>
                  <p className="text-lg">- MERN Stack Collaborated Project</p>
                </div>
              </a>
            </div>

            <div className="relative basis-1/3 flex-1">
              <a href="https://serene-hamlet-02089.herokuapp.com/" target="_blank" className="transition ease-in-out delay-80 hover:scale-110 hover:opacity-50" rel="noreferrer">
                <Image src={image3} className="rounded-3xl object-cover" width={"100%"} height={"45"} layout="responsive"/>
                <div className="absolute w-full py-2.5 bottom-0 inset-x-0 bg-white opacity-70 text-black text-xs text-center leading-4 rounded-b-3xl">
                  <h3 className="text-3xl">Note Taker App</h3>
                  <p className="text-lg">- Express.js, Node.js, Heroku</p>
                </div>
              </a>
            </div>

            <div className="relative basis-1/3 flex-1">
              <a href="https://jschaefmn.github.io/password-generator/" target="_blank" className="transition ease-in-out delay-80 hover:scale-110 hover:opacity-50" rel="noreferrer">
              <Image src={image4} className="rounded-3xl object-cover" width={"100%"} height={"45"} layout="responsive"/>
              <div className="absolute w-full py-2.5 bottom-0 inset-x-0 bg-white opacity-70 text-black text-xs text-center leading-4 rounded-b-3xl">
                <h3 className="text-3xl">Password Generator</h3>
                <p className="text-lg">- JavaScript</p>
              </div>
              </a>
            </div>

            <div className="relative basis-1/3 flex-1">
              <a href="https://group-project-dos.herokuapp.com/" target="_blank" className="transition ease-in-out delay-80 hover:scale-110 hover:opacity-50" rel="noreferrer">
                <Image src={image5} className="rounded-3xl object-cover" width={"100%"} height={"45"} layout="responsive"/>
                <div className="absolute w-full py-2.5 bottom-0 inset-x-0 bg-white opacity-70 text-black text-xs text-center leading-4 rounded-b-3xl">
                  <h3 className="text-3xl">Suds on Sale</h3>
                  <p className="text-lg">- Collaborated project using: Node.js, Express.js, RESTful APIs, Handlebars.js, MySQL, and Sequelize</p>
                </div>
                </a>
            </div>

            <div className="relative basis-1/3 flex-1">
              <a href="https://jschaefmn.github.io/weather-dashboard/" target="_blank" className="transition ease-in-out delay-80 hover:scale-110 hover:opacity-50" rel="noreferrer">
                <Image src={image6} className="rounded-3xl object-cover" width={"100%"} height={"45"} layout="responsive"/>
                <div className="absolute w-full py-2.5 bottom-0 inset-x-0 bg-white opacity-70 text-black text-xs text-center leading-4 rounded-b-3xl">
                  <h3 className="text-3xl">Weather Dashboard</h3>
                  <p className="text-lg">- JavaScript, jQuery, OpenWeather API</p>
                </div>
              </a>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}
