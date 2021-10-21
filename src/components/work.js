import React from "react"
import Link from 'gatsby-link'
import "../styles/global.css"
import { useContext } from "react";
import { MouseContext } from "../context/mouse-context";

// ------- import thumbnail images -------
import IllustrationThumb from "../assets/images/illustration/illustration-thumb.png"
import InohubThumb from "../assets/images/inohub/inohub-thumb.jpg"
import TbThumb from "../assets/images/tb-thumb.png"
import MedicaThumb from "../assets/images/medica/01.gif"
import ConstruirThumb from "../assets/images/construir/03.jpg"

export default function Work() {
  const { cursorChangeHandler } = useContext(MouseContext);

    return (
        <section id="work" className="w-10/12 mx-auto my-40">
          <div className="grid grid-cols-12 gap-12 mt-20">
            <div className="col-span-12 md:col-span-6"
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")}>
                <Link className="project-thumb text-gray-700 hover:scale transition duration-300 ease-in-out" to="/illustration/">
                  <div className="mb-6 rounded-3xl overflow-hidden" alt="Illustration project">
                    <img className="object-cover w-full h-60 transform transition duration-500 hover:scale-110" src={IllustrationThumb} alt="Alterar alt"/>
                  </div>
                    <h3 className="inline ml-8 text-xl font-rubik text-gray-700">Illustrations</h3>
                </Link>  
            </div>
            <div className="col-span-12 md:col-span-6"
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")}>
                <Link className="project-thumb text-gray-700 transition duration-300 ease-in-out" to="/transparencia/">
                  <div className="mb-6 rounded-3xl overflow-hidden" alt="Illustration project">
                    <img className="object-cover w-full h-60 transform transition duration-500 hover:scale-110" src={TbThumb} alt="Alterar alt"/>
                  </div>
                    <h3 className="inline ml-8 text-xl font-rubik text-gray-700">Transparência Brasil</h3>
                </Link>  
            </div>
            <div className="col-span-12 md:col-span-6"
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")}>
                <Link className="project-thumb text-gray-700 transition duration-300 ease-in-out" to="/medica/">
                  <div className="mb-6 rounded-3xl overflow-hidden" alt="Illustration project">
                    <img className="object-cover w-full h-60 transform transition duration-500 hover:scale-110" src={MedicaThumb} alt="Alterar alt"/>
                  </div>
                    <h3 className="inline ml-8 text-xl font-rubik text-gray-700">Medica</h3>
                </Link>  
            </div>
            <div className="col-span-12 md:col-span-6"
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")}>
                <Link className="project-thumb text-gray-700 transition duration-300 ease-in-out" to="/construir/">
                  <div className="mb-6 rounded-3xl overflow-hidden" alt="Illustration project">
                    <img className="object-cover w-full h-60 transform transition duration-500 hover:scale-110" src={ConstruirThumb} alt="Alterar alt"/>
                  </div>
                    <h3 className="inline ml-8 text-xl font-rubik text-gray-700">Construir</h3>
                </Link>  
            </div>
            <div className="col-span-12 md:col-span-6"
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")}>
                <Link className="project-thumb text-gray-700 transition duration-300 ease-in-out" to="/inohub/">
                  <div className="mb-6 rounded-3xl overflow-hidden" alt="Illustration project">
                    <img className="object-cover w-full h-60 transform transition duration-500 hover:scale-110" src={InohubThumb} alt="Alterar alt"/>
                  </div>
                    <h3 className="inline ml-8 text-xl font-rubik text-gray-700">Inohub</h3>
                </Link>  
            </div>
          </div>
        </section>
    )
};
