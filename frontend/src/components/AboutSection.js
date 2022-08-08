import React from "react";
import AboutUs from "../pages/AboutUS";

import styled from "styled-components"

const AboutSection = () => {
    return (
        <div>
            <Title>
            <h2>José Cordeiro</h2>
            <h2>Software Engineer</h2>
            </Title>
            <p>O engenheiro de software é o profissional responsável por projetar e guiar o desenvolvimento de sistemas, aplicativos e programas. O software é o conjunto de instruções lógicas de um computador ou sistema de processamento de dados, que irá orientar o que uma máquina deve fazer.</p>

            <button>Contact Me</button>

            <img src="https://pbs.twimg.com/profile_images/1521802864166899712/nc7rXY-m_400x400.jpg"/>
        </div>
    )
}

const Title =  styled.div`
    background: red;
`

export default AboutSection