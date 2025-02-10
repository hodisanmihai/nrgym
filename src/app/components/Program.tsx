'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Correct the import from solid icons for phone and envelope
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Change here


const Program = () => {
  return (
    <div
      className="w-full"
      style={{ background: 'linear-gradient(to bottom, white 100%, #1f1f1f 100%)' }}
    >
      <div className="w-full flex flex-col items-center justify-start pt-5 pb-6">
        <div className="h-[100%] w-[90%]  flex flex-col items-center">
          
          {/* Orar */}
          <div id='program' className="overflow-x-auto w-full rounded-lg shadow-2xl">
            <table className="min-w-full table-auto border-collapse bg-white shadow-xl border-2 border-gray-100 rounded-lg">
              <thead>
                <tr className="bg-[#1f1f1f] text-white">
                  <th className="font-extrabold text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-white">Ziua</th>
                  <th className="font-extrabold text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-white">Program</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b hover:bg-gray-100">
                  <td className="py-3 px-6 text-center font-medium">Luni</td>
                  <td className="py-3 px-6 text-center">07:00 - 22:00</td>
                </tr>
                <tr className="border-b hover:bg-gray-100">
                  <td className="py-3 px-6 text-center font-medium">Marţi</td>
                  <td className="py-3 px-6 text-center">07:00 - 21:00</td>
                </tr>
                <tr className="border-b hover:bg-gray-100">
                  <td className="py-3 px-6 text-center font-medium">Miercuri</td>
                  <td className="py-3 px-6 text-center">07:00 - 21:00</td>
                </tr>
                <tr className="border-b hover:bg-gray-100">
                  <td className="py-3 px-6 text-center font-medium">Joi</td>
                  <td className="py-3 px-6 text-center">07:00 - 21:00</td>
                </tr>
                <tr className="border-b hover:bg-gray-100">
                  <td className="py-3 px-6 text-center font-medium">Vineri</td>
                  <td className="py-3 px-6 text-center">07:00 - 21:00</td>
                </tr>
                <tr className="border-b hover:bg-gray-100">
                  <td className="py-3 px-6 text-center font-medium">Sâmbătă</td>
                  <td className="py-3 px-6 text-center">09:00 - 20:00</td>
                </tr>
                <tr className="border-b hover:bg-gray-100">
                  <td className="py-3 px-6 text-center font-medium">Duminică</td>
                  <td className="py-3 px-6 text-center">ÎNCHIS</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Elements */}
          <div className="w-[90%] h-1/2  flex justify-evenly items-end md:items-center mt-12 space-x-8 md:flex-row flex-col">

            {/* Social */}
            <div id='contact' className="w-full sm:w-1/3 h-auto bg-gray-100 shadow-xl rounded-lg p-6 flex flex-col items-center">
  <h1 className="font-extrabold text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-[#54c6d0] text-center mb-6">
  Contactează-ne
  </h1>

  <div className='w-full h-auto flex items-center justify-evenly'>

  <p className="text-lg text-gray-700 text-center mb-6 w-1/2">
    Urmărește-ne pe rețelele sociale sau contactează-ne direct prin telefon sau email pentru orice detalii!
  </p>

    <ul className="example-2 flex flex-col gap-6">
    <li className="icon-content">
      <a href="https://www.facebook.com/nrgym.oradea" data-social="facebook" className="icon-link">
        <FontAwesomeIcon icon={faFacebookF} className="fa text-4xl" />
        <span className="filled"></span>
        <div className="tooltip">Facebook</div>
      </a>
    </li>
    <li className="icon-content">
      <a href="https://www.instagram.com/nrgym_oradea/" data-social="instagram" className="icon-link">
        <FontAwesomeIcon icon={faInstagram} className="fa text-4xl" />
        <span className="filled"></span>
        <div className="tooltip">Instagram</div>
      </a>
    </li>
    <li className="icon-content">
      <a href="tel:0359-236641" data-social="phone" className="icon-link">
        <FontAwesomeIcon icon={faPhone} className="fa text-4xl" />
        <span className="filled"></span>
        <div className="tooltip">Phone</div>
      </a>
    </li>
    <li className="icon-content">
      <a href="mailto:nrgym23@yahoo.com" data-social="gmail" className="icon-link">
        <FontAwesomeIcon icon={faEnvelope} className="fa text-4xl" />
        <span className="filled"></span>
        <div className="tooltip">Gmail</div>
      </a>
    </li>
  </ul>
  
  </div>
           </div>

 

           
            {/* Google Maps */}
<div className="w-full sm:w-1/3 aspect-square md:aspect-video  shadow-2xl overflow-hidden rounded-lg md:pt-0 pt-6">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2718.419710810366!2d21.915603577063994!3d47.05161657114445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474647c3d9acd355%3A0x1ff6cbeed40636b9!2sNRGym!5e0!3m2!1sro!2sro!4v1739177652043!5m2!1sro!2sro"
    width="100%"
    height="100%"
    style={{ borderRadius: "8px"
    }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
