import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import bea from "../public/bea.jpg";
import training from "../public/training.jpg";
import party from "../public/party.jpg";
import volleyball from "../public/beach.jpg";
import badminton from "../public/badminton.jpeg";
import sightseeing from "../public/sightseeing.jpeg";
import personaltraining from "../public/personaltraining.jpg";
import wildcamping from "../public/wildcamping.jpg";
import slavonija from "../public/slavonija.jpg";

const Home = () => {
  return (
    <div>
      <main className="bg-white px-10 md:px-20 lg:px-40">
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
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Domagoj Babok
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">
              Master of Science in Kinesiology{" "}
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
              study of movement encompassing the physiological, mechanical, and
              behavioral aspects of physical activity.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillLinkedin />
            <AiFillTwitterCircle />
            <AiFillYoutube />
          </div>
          <div className="relative rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden">
            <Image src={bea} alt="avatar" objectFit="cover" layout="fill" />
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
              <Image
                src={training}
                width={300}
                height={100}
                objectFit="cover"
              />
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
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                src={volleyball}
                width={300}
                height={100}
                objectFit="cover"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Profesional and amateur beach volleyball
              </h3>
              <p className="py-2">
                Wanting to compete in beach volley by my side? Want to sponsor
                my personal career or just try to track my results and look some
                of my games? All can be negotiated by calling my phone number or
                contacting me on my social media channels
              </p>
              <h4 className="py-4 text-teal-600">
                My socials can be found on facebook, instagram and youtube
              </h4>
              <p className="text-gray-800 py-1">Facebook: Domagoj Babok</p>
              <p className="text-gray-800 py-1">Instagram: @domagoj_babok </p>
              <p className="text-gray-800 py-1">Youtube: Bablok </p>
              <p className="text-gray-800 py-1">
                Contact number: ++14654644464{" "}
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={party} width={300} height={100} objectFit="cover" />
              <h3 className="text-lg font-medium pt-8 pb-2">My free time</h3>
              <p className="py-2">
                While learning and trying to be the best version of myself, I
                like to entertain myself with spending time with friends,
                playing board games, watching some football matches, training
                and bunch of other stuff that young people do.
              </p>
              <h4 className="py-4 text-teal-600">Throwbacks on last summer</h4>
              <p className="text-gray-800 py-1">Istria, sleeping in tents</p>
              <p className="text-gray-800 py-1">
                Zadar and St.Filip and Jakov, sightseeing{" "}
              </p>
              <p className="text-gray-800 py-1">
                Ičići, volleyball tournament{" "}
              </p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 ">Adventures</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              My whole adventure started by getting recognized by few good
              people, feeling great by doing what I love and most of all,
              experiencing new things every single day
            </p>
          </div>
          <div>
            <div>
              <Image src={wildcamping} />
            </div>
            <div>
              <Image src={sightseeing} />
            </div>
            <div>
              <Image src={badminton} />
            </div>
            <div>
              <Image src={personaltraining} />
            </div>
            <div>
              <Image src={slavonija} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
