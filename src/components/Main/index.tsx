"use client";

import Image from "next/image";
import TakshashilaSecondaryLogo from "@/assets/takshashila-secondary-logo.svg";
import TakshashilaTextLogo from "@/assets/takshashila-text.svg";
import TakshashilaSideProp from "@/assets/about-cit-side-prop-tklogo-hero.png";

import IMGSooriNa from "@/assets/stacked-images-about-section/soori-na-speaking.png";
import IMGWeloveOs from "@/assets/stacked-images-about-section/workshop-we-love-os.png";
import IMGDjDance from "@/assets/stacked-images-about-section/tk-dj-crowd-dance.png";
import IMGPeopleSitting from "@/assets/stacked-images-about-section/people-sitting-together.png";
import IMGSriram from "@/assets/stacked-images-about-section/sriram-parthasarathy.png";
import IMGThaikudamGuitarist from "@/assets/stacked-images-about-section/thaikudam-gutarist.png";

import {
  IMGProShow,
  IMGWorkshop,
  IMGTechnical,
  IMGNonTechnical,
} from "@/assets/event-section";
import HeroCarousel from "../HeroCarousel";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import BGCITCrowd from "@/assets/cit-crowd-bg.webp";
import BGAbout from "@/assets/BGEvents.png";
import BGPaintSplash from "@/assets/paint-effect-bg.webp";
import BGThaiKudamBridge from "@/assets/thaikudambridge-bg.webp";

import { NavBar } from "@/components";
import HomeEventComponent from "../HomeEventComponent";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Main = () => {
  const [loaded, setLoaded] = useState(false);
  const controls1 = useAnimation();
  const [ref1, inView1] = useInView({ threshold: 0.3 });

  const [isContactComp, setContactComp] = useState<boolean>(true);

  const controls2 = useAnimation();
  const [ref2, inView2] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (loaded && inView1) {
      controls1.start("visible");
    }
    if (loaded && inView2) {
      controls2.start("visible");
    }
  }, [loaded, inView1, inView2, controls1, controls2]);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <main className="relative flex min-h-screen flex-col wrapper lg:snap-y lg:snap-mandatory">
      <NavBar />

      <Image
        className="h-screen -z-20 bg-[#272727]"
        alt="bg"
        src={BGPaintSplash}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        loading="lazy"
      />

      <section
        ref={ref1}
        className="relative w-full flex items-center justify-center min-h-screen h-screen p-10 md:p-24 lg:p-48 overflow-clip lg:snap-start"
      >
        <motion.div
          className="absolute lg:-right-56 -z-10 lg:-top-64 lg:w-[900px] min-w-[1000px] -bottom-40"
          initial={{ opacity: 0, x: 500, rotate: -30 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.5, type: "tween" }}
        >
          <Image
            src={TakshashilaSideProp}
            alt="cit-takshashila-primary-logo"
            width={500}
            height={500}
            className="w-full h-full"
          />
        </motion.div>

        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: loaded ? 1 : 0 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.07 }}
          className="w-[500px] lg:w-[700px] z-10"
        >
          <Image
            src={TakshashilaTextLogo}
            width={700}
            alt="cit-takshashila-primary-logo"
          />
        </motion.div>

        <HeroCarousel />

        <motion.div
          className="hidden lg:block absolute -z-10 -left-56 -top-0 w-[900px]"
          initial={{ opacity: 0, x: -500, rotate: 30 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.5, type: "tween" }}
        >
          <Image
            src={TakshashilaSideProp}
            width={500}
            height={500}
            className="w-full h-full"
            alt="cit-takshashila-primary-logo"
          />
        </motion.div>
      </section>

      <section
        ref={ref1}
        id="about"
        className="relative min-h-screen w-full p-10 md:p-24 lg:px-40 xl:pt-10 overflow-clip lg:snap-start"
      >
        <Image
          className="h-screen -z-10 bg-[#272727]"
          alt="bg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          loading="lazy"
          src={BGCITCrowd}
        />

        <section className="flex flex-col xl:flex-row items-center">
          <motion.section
            initial="hidden"
            animate={controls1}
            variants={{
              visible: { x: 0, opacity: 1 },
              hidden: { x: -200, opacity: 0 },
            }}
            transition={{ duration: 1 }}
          >
            <h1 className="font-oranienbaum text-4xl text-cream pb-3">
              About CIT
            </h1>
            <p className="text-cream text-xs md:text-base text-justify">
              A prominent institution ranking amongst the top colleges in Tamil
              Nadu, was established with an initiative to provide pragmatic
              learning. The institution has also partnered with a number of
              companies to set a worldwide standard by offering students a
              diverse range of possibilities that combine education and
              recreation. The students appetite for knowledge makes them thrive
              to prepare for the ready-to-serve industrial requirements. This is
              delivered by CIT through professional ethics which is sated by
              frequent guest lectures by professionals from various industries
              and academic backgrounds. Chennai Institute of Technology has been
              awarded the National Award of Excellence for Best Placements & has
              been ranked Second in Tamil Nadu. Our college has made dreams of
              thousands of students come true
              <br />
              <br />
              &quot;Our objective for establishing CIT is to transfer our
              knowledge to you, so that you can transform into a proper
              engineer&quot;
              <br />
              <br />
              <span className="font-bold italic text-base">
                ~Shri Sriram Parthasarathy
              </span>
            </p>
          </motion.section>

          <section className="m-5 xl:pt-0 w-40 h-40 xl:w-48 xl:h-48 relative xl:min-w-[350px]">
            <motion.section
              className="absolute md:left-20 left-0 rotate-6 xl:top-36 xl:left-52 xl:rotate-6 md:w-52"
              initial="hidden"
              animate={controls1}
              variants={{
                hidden: { x: -100, y: -100, opacity: 0, rotate: 6, scale: 1 },
                visible: { x: 0, y: 0, opacity: 1, rotate: -6, scale: 1 },
              }}
              transition={{ duration: 1.5 }}
              whileHover={{ scale: 1.08 }}
            >
              <Image
                height={200}
                width={200}
                src={IMGPeopleSitting}
                alt="People Sitting"
              />
            </motion.section>
            <motion.section
              className="absolute -rotate-6 md:right-20 right-10 xl:top-14 xl:left-10 md:w-52"
              initial="hidden"
              animate={controls1}
              variants={{
                hidden: { x: 67, y: -20, opacity: 0, rotate: 6, scale: 1 },
                visible: { x: 0, y: 0, opacity: 1, rotate: -6, scale: 1 },
              }}
              transition={{ duration: 1.5 }}
              whileHover={{ scale: 1.08 }}
            >
              <Image
                height={200}
                width={200}
                src={IMGWeloveOs}
                alt="We love Open Source"
              />
            </motion.section>
            <motion.section
              className="absolute rotate-6 xl:top-0 xl:left-52 xl:rotate-6 md:w-52"
              initial="hidden"
              animate={controls1}
              variants={{
                hidden: { x: -100, y: 40, opacity: 0, rotate: -6, scale: 1 },
                visible: { x: 0, y: 0, opacity: 1, rotate: 6, scale: 1 },
              }}
              transition={{ duration: 1.5 }}
              whileHover={{ scale: 1.08 }}
            >
              <Image
                height={200}
                width={200}
                src={IMGSriram}
                alt="Respected Chairman of CIT Institutions"
              />
            </motion.section>
          </section>
        </section>

        <section className="flex xl:flex-row-reverse xl:mt-16">
          <motion.section
            initial="hidden"
            animate={controls1}
            variants={{
              visible: { x: 0, opacity: 1 },
              hidden: { x: 200, opacity: 0 },
            }}
            transition={{ duration: 1 }}
          >
            <h1 className="font-oranienbaum text-4xl text-cream py-4">
              About Takshashila
            </h1>
            <p className="text-cream text-xs md:text-base text-justify">
              The Grand Annual Cultural Fiesta of Chennai Institute Of
              Technology is an eminent spectacle that gives the student
              community a platform to showcase their talents and sculpt their
              skills. This memorable occasion is a perfect fusion of
              entertainment and knowledge-filled atmosphere with a potpourri of
              genres that escalate the vibrance of celebration. The event
              inculcates a blend of virtues among the students which makes them
              shine out of the crowd. This time, Takshashila&apos; s voyage will
              be an exhilarating one, full of adventures that are fished
              straight out of the ocean.
            </p>
          </motion.section>
          <section className="hidden xl:block w-48 h-48 relative xl:min-w-[350px]">
            <motion.section
              className="absolute -left-8 top-6"
              initial="hidden"
              animate={controls1}
              variants={{
                hidden: { x: 75, y: 30, opacity: 0, rotate: 6 },
                visible: { x: 0, y: 0, opacity: 1, rotate: -6 },
              }}
              transition={{ duration: 1.5 }}
              whileHover={{ scale: 1.08 }}
            >
              <Image
                height={200}
                width={200}
                src={IMGSooriNa}
                alt="Actor Soori"
              />
            </motion.section>
            <motion.section
              className="absolute top-28 right-16"
              initial="hidden"
              animate={controls1}
              variants={{
                hidden: { x: -30, y: -30, opacity: 0, rotate: 3 },
                visible: { x: 0, y: 0, opacity: 1, rotate: -3 },
              }}
              transition={{ duration: 1.5 }}
              whileHover={{ scale: 1.08 }}
            >
              <Image
                height={200}
                width={200}
                src={IMGDjDance}
                alt="Group of Students"
              />
            </motion.section>
            <motion.section
              className="absolute right-5 -top-6"
              initial="hidden"
              animate={controls1}
              variants={{
                hidden: { x: -70, y: 60, opacity: 0, rotate: -6 },
                visible: { x: 0, y: 0, opacity: 1, rotate: 6 },
              }}
              transition={{ duration: 1.5 }}
              whileHover={{ scale: 1.08 }}
            >
              <Image
                height={200}
                width={200}
                src={IMGThaikudamGuitarist}
                alt="Thaikudam Bridge"
              />
            </motion.section>
          </section>
        </section>
      </section>

      <section
        ref={ref2}
        id="events"
        className="flex flex-col relative min-h-screen w-full  p-10 md:p-24 lg:p-48 lg:py-36 lg:snap-start"
      >
        <Image
          className="h-screen -z-10 bg-[#272727]"
          alt="bg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          loading="lazy"
          src={BGThaiKudamBridge}
        />
        <h1 className="font-oranienbaum text-5xl text-cream pb-3 text-center">
          Events
        </h1>

        <motion.section
          className="hidden xl:flex flex-grow space-x-3"
          initial="hidden"
          animate={controls2}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0.5 },
          }}
          transition={{ duration: 1.5 }}
        >
          <HomeEventComponent
            title="Pro Shows"
            description="For people with friends"
            background={IMGProShow}
          />

          <HomeEventComponent
            title="Workshop"
            description="For NERDS"
            background={IMGWorkshop}
          />

          <HomeEventComponent
            title="Non-Technical"
            description="it is non techincal events, loren ipsum its on load rasengan macbook pro router keyboard it is pendrive paper"
            background={IMGNonTechnical}
          />

          <HomeEventComponent
            title="Technical"
            description="For people with "
            background={IMGTechnical}
          />
        </motion.section>

        <section className="xl:hidden text-center flex flex-1 h-0">
          <Swiper
            slidesPerView={"auto"}
            effect={"creative"}
            creativeEffect={{
              prev: {
                translate: [0, 0, -700],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[EffectCreative, Autoplay]}
          >
            <SwiperSlide className="maxw72 w-full rounded-3xl">
              <HomeEventComponent
                title="Technical"
                description="For people with "
                background={IMGTechnical}
              />
            </SwiperSlide>
            <SwiperSlide className=" maw72 rounded-3xl">
              <HomeEventComponent
                title="Non-Technical"
                description="it is non techincal events, loren ipsum its on load rasengan macbook pro router keyboard it is pendrive paper"
                background={IMGNonTechnical}
              />
            </SwiperSlide>
            <SwiperSlide className=" maxw72 rounded-3xl ">
              <HomeEventComponent
                title="Pro Shows"
                description="For people with friends"
                background={IMGProShow}
              />
            </SwiperSlide>
          </Swiper>
        </section>
      </section>

      <section
        id="contact"
        className="flex flex-col relative min-h-screen w-full p-10 md:px-24 md:py-16 lg:snap-end"
      >
        <Image
          className="h-screen -z-20 bg-[#272727]"
          alt="bg"
          src={BGAbout}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          loading="lazy"
        />

        {/*
        <h1 className="font-oranienbaum text-5xl text-cream pb-3">Sponsors</h1>
        <section className="min-h-40 xl:min-h-48 bg-red-200"></section>
*/}

        <h1 className="font-oranienbaum text-5xl text-cream py-8">
          {isContactComp ? "Contact Us" : "Location"}
        </h1>

        {isContactComp ? (
          <section className="h-fit xl:h-0 p-6 flex flex-col items-center justify-center flex-grow space-x-5 w-full xl:w-3/4 self-center rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-100 border border-gray-600">
            <h1 className="text-3xl xl:text-5xl text-[#f0f0f0] pb-3">Phone</h1>

            <ul className="text-base xl:text-xl text-cream text-center space-y-1">
              <li>
                <h1>Saran C (General Queries)</h1>
              </li>

              <li>
                <h1>M Gayathrie (Event Queries)</h1>
              </li>

              <li>
                <h1>Shyam (Sponsorship Queries) </h1>
              </li>

              <li>
                <h1>V Akshya (Pro Shows Queries)</h1>
              </li>

              <li>
                <h1>Preetha (Pro Shows Queries)</h1>
              </li>
              <li>
                <h1>Jesvi Jonathan ( Developer)</h1>
              </li>
            </ul>

            <button
              onClick={() => setContactComp(false)}
              className="mt-5 rounded-md cursor-pointer bg-[#f0f0f0] p-2 px-3 text-grey hover:bg-cream xl:mr-3"
            >
              Location
            </button>
          </section>
        ) : (
          <section className="h-fit xl:h-0 p-6 flex flex-col xl:flex-row flex-grow xl:space-x-5 space-y-5 xl:space-y-0 w-full xl:w-3/4 self-center rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-100 border border-gray-600">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62198.13500334535!2d80.03678337390197!3d13.011237000629103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f4d07355bab5%3A0xbb6063169c4ed4d9!2sChennai%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1708087898963!5m2!1sen!2sin"
              loading="lazy"
            ></iframe>

            <section className="text-cream flex flex-col items-center justify-center h-full w-full xl:w-0 flex-grow">
              <h1 className="text-xl text-[#f0f0f0] font-bold text-center xl:text-4xl md:text-3xl">
                Chennai Institute of Technology
              </h1>
              <p className="text-center pt-3">
                SH-113, Sarathy Nagar,
                <br />
                Pudupedu Kundrathur,
                <br />
                Sriperumbudur Main Road,
                <br />
                Chennai, Tamil Nadu
                <br />
                PIN : 600069
              </p>

              <button
                onClick={() => setContactComp(true)}
                className="mt-3 rounded-md cursor-pointer bg-[#f0f0f0] p-2 px-3 text-grey hover:bg-cream mr-3"
              >
                Contact Us{" "}
              </button>
            </section>
          </section>
        )}
      </section>

      <section className="w-full relative flex items-center justify-center border-y  border-cream ">
        <Image
          className="h-screen -z-10 bg-[#272727]"
          alt="bg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          loading="lazy"
          src={BGPaintSplash}
        />
        <section className="p-10 py-24">
          <Image
            alt="TK-logo"
            width={500}
            height={90}
            src={TakshashilaSecondaryLogo}
            className="w-full max-w-56"
          />
        </section>

        <section className="hidden text-[#f0f0f0] w-2/3 lg:flex lg:justify-end lg:items-center lg:gap-x-5">
          <section className="flex flex-col space-y-1">
            <h1 className="text-2xl mb-3">Socials</h1>
            <a className="text-cream text-xs" href="#">
              Instagram
            </a>
            <a className="text-cream text-xs" href="#">
              Facebook
            </a>
            <a className="text-cream text-xs" href="#">
              LinkedIn
            </a>
            <a className="text-cream text-xs" href="#">
              Phone
            </a>
            <a className="text-cream text-xs" href="#">
              Email
            </a>
          </section>

          <div className="bg-cream w-[1px] h-24 mx-8" />

          <section className="flex flex-col space-y-1">
            <h1 className="text-2xl mb-3">Events</h1>
            <a className="text-cream text-xs" href="#">
              Technical
            </a>
            <a className="text-cream text-xs" href="#">
              Non Technical
            </a>
            <a className="text-cream text-xs" href="#">
              Workshops
            </a>
            <a className="text-cream text-xs" href="#">
              Pro-Shows
            </a>
            <a className="text-cream text-xs" href="#">
              Others
            </a>
          </section>

          <div className="bg-cream w-[1px] h-24 mx-8" />

          <section className="flex flex-col space-y-1">
            <h1 className="text-2xl mb-3">Website</h1>
            <a className="text-cream text-xs" href="#">
              Terms & Policy
            </a>
            <a className="text-cream text-xs" href="#">
              Services
            </a>
            <a className="text-cream text-xs" href="#">
              Account
            </a>
            <a className="text-cream text-xs" href="#">
              Collage Site
            </a>
            <a className="text-cream text-xs" href="#">
              Developer
            </a>
          </section>

          <div className="bg-cream w-[1px] h-24 mx-8" />

          <section className="flex flex-col space-y-1">
            <h1 className="text-2xl mb-3">Support</h1>
            <a className="text-cream text-xs" href="#">
              Takshashila Team
            </a>
            <a className="text-cream text-xs" href="#">
              Report
            </a>
            <a className="text-cream text-xs" href="#">
              Developer
            </a>
            <a className="text-cream text-xs" href="#">
              Contact Us
            </a>
            <a className="text-cream text-xs" href="#">
              Credits
            </a>
          </section>
        </section>
      </section>

      <section className="bg-grey flex justify-center gap-3 text-white text-[9px] py-2 lg:snap-end">
        <h1>cittakshashila.in</h1>
        <h1>Copyright &copy; 2024</h1>
        <h1>Website By Team :bitspace</h1>
      </section>
    </main>
  );
};

export default Main;
