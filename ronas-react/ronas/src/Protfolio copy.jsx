import React from "react";


import gsap from 'gsap'

import {useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Protfolio = () => {

  useGSAP([
    () => {
      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".right",
        markers:true
      });
    }
  ]);

  return (
    <div className="flex gap-20 bg-green-500  ">

      <div className="flex bg-red-300 flex-col gap-72 gallery">
        <div className="flex flex-col gap-7 max-w-2xl pr-50 ">
          <p className="text-xl ">Bank of America</p>
          <h3 className="text-p-size pr-52  font-medium ">
            A redesign concept of the Bank of America's mobile app
          </h3>
          <p className="opacity-40"> mobile design</p>
          <button className="py-5 px-10   text-black rounded-full border-2 border-slate-400 w-fit">
            View More
          </button>
        </div>
        <div className="flex flex-col gap-7 max-w-2xl pr-50 ">
          <p className="text-xl ">Facta</p>
          <h3 className="text-p-size pr-52  font-medium ">
        
            An employee engagement and training web app
          </h3>
          <p className="opacity-40"> mobile design</p>
          <button className="py-5 px-10   text-black rounded-full border-2 border-slate-400 w-fit">
            View More
          </button>
        </div>
        <div className="flex flex-col gap-7 max-w-2xl pr-50 ">

          <p className="text-xl ">Self-Care</p>
          <h3 className="text-p-size pr-52  font-medium ">
            A self-care app that offers a personalized selection of guides and
            mentors
          </h3>
          <p className="opacity-40"> mobile design</p>
          <button className="py-5 px-10   text-black rounded-full border-2 border-slate-400 w-fit">
            View More
          </button>
        </div>
      
        <div className="flex flex-col gap-7 max-w-2xl pr-50 ">
          <p className="text-xl ">Food Delivery </p>
          <h3 className="text-p-size pr-52  font-medium ">
            
            An on-demand food Delivery App
          </h3>
          <p className="opacity-40"> mobile design</p>
          <button className="py-5 px-10   text-black rounded-full border-2 border-slate-400 w-fit">
            View More
          </button>
        </div>
      </div>

      <div className=" overflow-hidden  bg-blue-600   max-w-box-width max-h-72 right  " >
      
          <img 
        
          src="https://ronasit.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fhome-bankofamerica-light.c090f46b.webp&w=1920&q=75"
          alt=""
        /> 
         <img
          src="https://ronasit.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fhome-facta-light.f90db4b9.webp&w=1920&q=75"
          alt=""  
        /> 
         <img
          src="https://ronasit.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fhome-selfcare-light.53e239a5.webp&w=1920&q=75"
          alt=""
        />
        <img  className="rounded-s-xl "
          src="https://ronasit.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fhome-delivery-light.5946b5d8.webp&w=1920&q=75"
          alt="" 
        /> 
      </div>
    </div>
  );
};

export default Protfolio;