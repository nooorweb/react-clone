import React from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";




const Service = () => {

useEffect(()=>{

AOS.init({
duration:1000

})

},[])
  
  return (
    <>
      <div className="flex   justify-between pt-20 pb-20 "  >
        <p className="pr-36 text-2xl "  data-aos='fade-up' >
          You may need our services if you want to:
        </p>

        <div className="flex    flex-col gap-8 justify-between  w-9/12 ">
          <div className="flex gap-16     justify-between items-start "  data-aos='fade-up'>
            <svg 
              viewBox="0 0 24 24"
              width='150px'
          
             
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#D7F2FF"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
             
                <path
                  d="M11 18H13M9.2 21H14.8C15.9201 21 16.4802 21 16.908 20.782C17.2843 20.5903 17.5903 20.2843 17.782 19.908C18 19.4802 18 18.9201 18 17.8V6.2C18 5.0799 18 4.51984 17.782 4.09202C17.5903 3.71569 17.2843 3.40973 16.908 3.21799C16.4802 3 15.9201 3 14.8 3H9.2C8.0799 3 7.51984 3 7.09202 3.21799C6.71569 3.40973 6.40973 3.71569 6.21799 4.09202C6 4.51984 6 5.07989 6 6.2V17.8C6 18.9201 6 19.4802 6.21799 19.908C6.40973 20.2843 6.71569 20.5903 7.09202 20.782C7.51984 21 8.07989 21 9.2 21Z"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
            <p className="text-3xl font-semibold  py-5 pl-4">
              Create an MVP to attract investors and test your business idea
            </p>
          </div>
          <div className="flex gap-16    text-left   justify-between items-start"  data-aos='fade-up'>
          <svg className="pr-5" width='150px' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 7C9.23858 7 7 9.23858 7 12C7 13.3613 7.54402 14.5955 8.42651 15.4972C8.77025 15.8484 9.05281 16.2663 9.14923 16.7482L9.67833 19.3924C9.86537 20.3272 10.6862 21 11.6395 21H12.3605C13.3138 21 14.1346 20.3272 14.3217 19.3924L14.8508 16.7482C14.9472 16.2663 15.2297 15.8484 15.5735 15.4972C16.456 14.5955 17 13.3613 17 12C17 9.23858 14.7614 7 12 7Z" stroke="#000000" stroke-width="2"></path> <path d="M12 4V3" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M18 6L19 5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M20 12H21" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 12H3" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5 5L6 6" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin  ="round"></path> <path d="M10 17H14" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            <p className="text-3xl font-semibold text-left justify-between  py-6  pl-0 ">
              Automate the internal processes of your business
            </p>
          </div>

          <div className="flex    gap-16   text-left   justify-between items-start pt-4"  data-aos='fade-up'>
            <svg    className=""
              width="230px"
         
              viewBox="0 0 24 24"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M16 6.00008V4.2844C16 3.51587 16 3.13161 15.8387 2.88321C15.6976 2.66587 15.4776 2.5118 15.2252 2.45345C14.9366 2.38677 14.5755 2.51809 13.8532 2.78073L6.57982 5.4256C6.01064 5.63257 5.72605 5.73606 5.51615 5.91845C5.33073 6.07956 5.18772 6.28374 5.09968 6.51304C5 6.77264 5 7.07546 5 7.6811V12.0001M9 17.0001H15M9 13.5001H15M9 10.0001H15M8.2 21.0001H15.8C16.9201 21.0001 17.4802 21.0001 17.908 20.7821C18.2843 20.5903 18.5903 20.2844 18.782 19.9081C19 19.4802 19 18.9202 19 17.8001V9.20008C19 8.07997 19 7.51992 18.782 7.0921C18.5903 6.71577 18.2843 6.40981 17.908 6.21807C17.4802 6.00008 16.9201 6.00008 15.8 6.00008H8.2C7.0799 6.00008 6.51984 6.00008 6.09202 6.21807C5.71569 6.40981 5.40973 6.71577 5.21799 7.0921C5 7.51992 5 8.07997 5 9.20008V17.8001C5 18.9202 5 19.4802 5.21799 19.9081C5.40973 20.2844 5.71569 20.5903 6.09202 20.7821C6.51984 21.0001 7.07989 21.0001 8.2 21.0001Z"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
            <p className="text-3xl font-semibold   py-5 text-left pl-4">
              Create a web or mobile app to attract new customers and make your
              service more convenient for them
            </p>
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
};

export default Service;
