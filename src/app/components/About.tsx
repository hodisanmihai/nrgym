import React from 'react';
import Image from 'next/image';
import photo4 from "../assets/photos/97699e5295d104e8543a66b3bed50c4b.jpg";
import photo5 from "../assets/photos/118938174_3087381578037978_2355624407395000944_n.jpg";
import photo1 from "../assets/photos/316550445_854880385760123_3885253123846279922_n.jpg"
import photo3 from "../assets/photos/472553996_9069133986529344_1421504526921241970_n.jpg";
import photo2 from "../assets/photos/474996298_1461789941735828_7054557777782025423_n.jpg";

const About = () => {
  return (
    <div id='about' className="w-full flex justify-center bg-white">
      <div className="w-[90%] mt-10 flex justify-start flex-col space-y-12">

        {/* Title Section */}
        <div className="text-center space-y-2">
          <h3 className="text-sm sm:text-base tracking-[1rem] text-black">
            Sala creata
          </h3> 
          <h1 className="font-extrabold text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-[#fe6d2f]">
            PENTRU TINE
          </h1>
        </div>

        {/* Cards Section */}
        <div className='w-full flex justify-center text-black'>
          <div className='w-[90%] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8'>
            {/* Cards 1 */}
            <div className="photo-card group flex justify-center items-center flex-col pt-2">
              <Image src={photo1} alt="photo" className='w-[200px] h-[270px] rounded-2xl object-cover p-2 md:p-0'/>
              <h5 className='pt-4 text-center font-semibold group-hover:text-[#fe6d2f]'>Antrenamente eficiente</h5>
            </div>
            {/* Cards 2 */}
            <div className="photo-card group flex justify-center items-center flex-col pt-2">
              <Image src={photo2} alt="photo" className='w-[200px] h-[270px] rounded-2xl object-cover p-2 md:p-0'/>
              <h5 className='pt-4 text-center font-semibold group-hover:text-[#fe6d2f]'>Antrenori dedicați</h5>
            </div>
            {/* Cards 3 */}
            <div className="photo-card group flex justify-center items-center flex-col pt-2">
              <Image src={photo3} alt="photo" className='w-[200px] h-[270px] rounded-2xl object-cover p-2 md:p-0'/>
              <h5 className='pt-4 text-center font-semibold group-hover:text-[#fe6d2f]'>Putere și performanță</h5>
            </div>
            {/* Cards 4 */}
            <div className="photo-card group flex justify-center items-center flex-col pt-2">
              <Image src={photo4} alt="photo" className='w-[200px] h-[270px] rounded-2xl object-cover p-2 md:p-0'/>
              <h5 className='pt-4 text-center font-semibold group-hover:text-[#fe6d2f]'>Relaxare totală</h5>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className='w-full flex justify-center items-center mt-16'>
          <div className='w-[90%] flex flex-col lg:flex-row justify-evenly items-center'>
            
            {/* Left Side Image */}
            <div className="w-full lg:w-[45%] flex justify-center">
              <Image src={photo5} alt="photo" className='w-[450px] object-contain rounded-2xl shadow-xl'/>
            </div>

            {/* Right Side Text */}
            <div className="w-full lg:w-[45%] text-center lg:text-left space-y-6 pt-6 md:pt-0">
              {/* First Text Block */}
              <div className="space-y-2">
                <h3 className="text-sm sm:text-base tracking-[1rem] text-black">
                  Cine
                </h3> 
                <h1 className="font-extrabold text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-[#fe6d2f]">
                  SUNTEM?
                </h1>
                <p className="text-sm text-black">
                  Suntem o echipă pasionată de fitness, care crede că fiecare persoană merită să aibă un corp sănătos și o minte puternică. NRGym a fost creat pentru a oferi nu doar antrenamente fizice, dar și o comunitate de sprijin care te ajută să crești și să te depășești pe tine însuți.
                </p>
              </div>
              
              {/* Second Text Block */}
              <div className="space-y-2">
                <h3 className="text-sm sm:text-base tracking-[1rem] text-black">
                  Misiunea
                </h3> 
                <h1 className="font-extrabold text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-[#fe6d2f]">
                  Noastra
                </h1>
                <p className="text-sm text-black">
                  Misiunea noastră este să inspirăm fiecare persoană să își atingă obiectivele fizice și mentale prin antrenamente personalizate și suport constant. Viziunea noastră este de a crea un loc unde oamenii se simt motivați și susținuți, indiferent de nivelul lor de fitness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
