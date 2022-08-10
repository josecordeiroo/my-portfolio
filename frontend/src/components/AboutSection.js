import React from "react";
import { About, Description, Image } from "../styles";

const AboutSection = () => {
    return (
        <About>
            <Description>
            <h1>José Cordeiro</h1>
            <h2>Fullstack Developer</h2>
            <p>A Full Stack Developer is someone who works with the Back End — or server side — of the application as well as the Front End, or client side. Full Stack Developers have to have some skills in a wide variety of coding niches, from databases to graphic design and UI/UX management in order to do their job well.</p>
            <button>Contact Me</button>
            </Description>


            <Image>
            <img src="https://uploaddeimagens.com.br/images/003/976/204/original/Zeca.png?1660161794"/>
            </Image>

            
        </About>
    )
}

export default AboutSection