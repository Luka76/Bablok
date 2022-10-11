import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";

const Home = () => {
  return (
    <div>
      <main className="bg-white px-10 ">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-3xl font-burtons">Bablok's Adventures</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-xl" />
              </li>
              <li>
                <a
                  href="Blog"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                >
                  Personal Blog
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              Domagoj Babok
            </h2>
            <h3 className="text-2xl py-2">Master of Science in Kinesiology </h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              study of movement encompassing the physiological, mechanical, and
              behavioral aspects of physical activity.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillLinkedin />
            <AiFillTwitterCircle />
            <AiFillYoutube />
          </div>
          <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden">
            <Image src={deved} alt="avatar" objectFit="cover" layout="fill" />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 ">Services I Offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Multiple years in <span className="text-teal-500">education</span>
              , <span className="text-teal-500">training</span> and
              <span className="text-teal-500"> teaching</span> others. Solo or
              working in groups, it doesn't matter. Have knowlegde in many
              fields of trainig, from football, handball, badminton,
              bodybuilding etc.
            </p>
            <p className="text-md py-5 leading-8 text-gray-800">
              I'm offering training with partner or personally with me. I'm able
              to come to your place or you can come to my gym
            </p>
          </div>
          <div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Personal trainings
              </h3>
              <p className="py-2">
                Working towards your body goals and building your dream phisique
                solo or in pair.
              </p>
              <h4 className="py-4 text-teal-600">Working hours I'm free</h4>
              <p className="text-gray-800 py-1">10:00h - 12:00h </p>
              <p className="text-gray-800 py-1">14:00h - 16:00h </p>
              <p className="text-gray-800 py-1">18:00h - 20:00h </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
