import React from "react";
import { About, Description, Image } from "../styles";

const AboutSection = () => {
    return (
        <About>
            <Description>
            <h1>José Cordeiro</h1>
            <h2>Fullstack Developer</h2>
            <p>Living in São Paulo, Brazil, I'm a fullstack programmer used to developing with Javascript, dealing with the day-to-day tools that are highly sought after, such as Node.js, React, MongoDB and others. I am currently studying Systems Analysis and Development at Unisa University and looking for an internship in a company that can help me to develop myself more and more as a good professional.</p>
            <button>Contact Me</button>
            </Description>


            <Image>
            <img src="https://uploaddeimagens.com.br/images/003/976/204/original/Zeca.png?1660161794" alt="Uma foto de José Cordeiro"/>
            </Image>

            
        </About>
    )
}

export default AboutSection