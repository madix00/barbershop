"use client"

import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";

import React, { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function Home() {

  const images = [
  "/1.jpg",
  "/2.jpg",
  "/3.jpg",
  "/4.jpg",
  "/5.jpg",
];

const [index, setIndex] = useState<number>(0);

  const nextImage = () => {
    setIndex((prev: number) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };


  return (
    <div>
        <Header/>

        <div id="kalender" className="dark:bg-gray-900">
          <iframe 
            src="https://koalendar.com/e/klippning?embed=true" 
            width="100%"
            height="800"
          />  
        </div>

      {/* style={{ justifyContent: "center", alignItems: "center", display: "flex", marginTop: "20px", marginBottom: "20px" }}  */}

        <div id="map" className="flex justify-center items-center my-4 gap-x-20 ">

            <div className="gap-8 flex flex-col" >
              <div className="w-70 font-extrabold text-4xl text-gray-900 dark:text-black">
                När detaljerna räknas
              </div>
              <div className="w-70 text-lg font-semibold text-gray-900 dark:text-black">
                En barbershop där detaljerna avgör och resultatet känns helt rätt för dig. Oavsett om du vill ha en klassisk fade, en modern frisyr eller ett välvårdat skägg, ser vi till att du går härifrån med en stil som håller både i stolen och i vardagen.
              </div>
              <div className="mt-2">
                <a
                  href="#kalender"
                  className="rounded-md bg-indigo-600 px-8.5 py-5.5 text-xl  font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
                >
                  BOKA TID
                </a>
              </div>
            </div>

           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2282.166519508599!2d14.150451376968974!3d57.73934533726135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465a7241dbc9dd0f%3A0xd1830ac9bc3949ae!2zRGlyZWt0ZW4gUsOlc2zDpHR0!5e1!3m2!1sen!2sse!4v1757242072758!5m2!1sen!2sse" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        </div>


        <div style={{justifyContent: "center" }} className="dark:bg-gray-900 flex items-center gap-x-50">

          <div className="mt-10 mb-10 flex items-center gap-x-5">
            <div
              className="rounded-md px-3.5 py-3.5 text-lg border-2 font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2  bg-zinc-50"
            >

                <a
                  href="https://maps.app.goo.gl/HUzws8L1DhoqQFEh9"
                >
                  <img className="w-22 h-22" src="/gps-icon.png" alt="" />
                </a> 

            </div>

            <div style={{ display: "flex", flexDirection: "column" }} className="gap-8" >
              <div className="font-extrabold text-4xl text-gray-900 dark:text-white">
                <a
                  href="https://maps.app.goo.gl/HUzws8L1DhoqQFEh9"
                >
                  Besöksadress
                </a>
              </div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white">
                <a
                  href="https://maps.app.goo.gl/HUzws8L1DhoqQFEh9"
                >
                  Sparvhöksgatan 1, 556 11  
                  <br />
                  Jönköping       
                </a>                
              </div>
            </div>

          </div>

          <div className="mt-10 mb-10 flex items-center gap-x-5">
            <div
              className="rounded-md px-3.5 py-3.5 text-lg border-2 font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2  bg-zinc-50"
            >
              <a
                href="tel:+46761882188"
              >
                <img className="w-22 h-22" src="/phone-icon.png" alt="" />
              </a>

            </div>

            <div style={{ display: "flex", flexDirection: "column" }} className="gap-8" >
              <div className="font-extrabold text-4xl text-gray-900 dark:text-white">
                <a
                  href="tel:+46761882188"
                >
                  +46761882188
                </a>
                
              </div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white">
                Måndag - Lördag: 10:00 - 19:00
              </div>
            </div>

          </div>

        </div>

        {/* <div style={{backgroundColor: "white", margin: "12px"}}></div> */}

        <div className="flex justify-center items-center p-8 my-4 gap-x-13">
        {/* Text + Arrows on the right */}
          <div className="flex flex-col">

            <div className="gap-8 flex flex-col" >
              <div className="font-extrabold text-6xl text-gray-900 dark:text-black">
                Galleri
              </div>
              <div className="w-70 text-lg font-semibold text-gray-900 dark:text-black">
              Ta en titt på våra senaste klippningar, noggrant utförda av våra skickliga barberare i Stockholm. Våra barberare hjälper gärna dig att hitta en look som känns rätt för dig.           
              </div>
            </div>

            {/* Arrows */}
            <div className="flex gap-6 mt-10">
              <button
                onClick={prevImage}
                className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition"
              >
                <HiChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition"
              >
                <HiChevronRight size={24} />
              </button>
            </div>

          </div>

          {/* Image on the left */}
          <div className="">
            <img
              src={images[index]}
              alt={`Gallery image ${index + 1}`}
              className="w-2xl h-[800px] object-cover rounded-xl shadow-md"
          />
          </div>
        </div>        

        <Footer/>

        {/* <h1 className="text-3xl font-bold underline text-center">   calendly    </h1>

        <iframe src="https://calendly.com/mamadhazara18"
        style={{width: "100%", minWidth: "320px", height: "700px"}} frameBorder="0"></iframe> */}


        {/* <h1 className="text-3xl font-bold underline text-center">         google calender 1!    </h1>

        <iframe src="https://calendar.google.com/calendar/embed?src=branstark2108%40gmail.com&ctz=Europe%2FStockholm" 
        style={{border: 0}} width="800" height="600">
        </iframe> */}

        {/* <h1 className="text-3xl font-bold underline text-center" >      google calender 2!    </h1>


        <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ21vbWbhYKTCJxLaOiz-TiVpAUKBS7geSLIDN6K46g0T9ppEwdJnA27tz2SG6QS7rM1b-DmpKwV?gv=true" 
        style={{border: 0}} width="100%" height="1500"></iframe> */}


        {/* <div className="w-full h-[90vh]"> 
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ21vbWbhYKTCJxLaOiz-TiVpAUKBS7geSLIDN6K46g0T9ppEwdJnA27tz2SG6QS7rM1b-DmpKwV?gv=true" 
            style={{ border: 0 }}
            width="100%"
            height="100%"
          />
        </div> */}

    </div>
  );
}
