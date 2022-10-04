import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        
        @media (max-width: 1700px){
            font-size: 75%;
        }
    }
    
    body{
       background-color: #1b1b1b ;
       overflow-x: hidden;
       text-decoration: none;
    }

    button{
        border-radius: 5px;
        color: #23d997;
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        background: transparent;
        border: 1px solid #ffffff;
        transition: all 0.5s ease;
        &:hover{
            background-color: #23d997;
            color: white;
        }
    }

    h1{
        font-weight: lighter;
        font-size: 4rem;
    }

    h2{
        font-weight: lighter;
        font-size: 3rem;
    }

    h3{
        color: white;
    }

    h4{
        font-weight: bold;
        font-size: 1.2rem;
        color: lightgray;
    }

    

    span{
        font-weight: lighter;
        color: #416cd5;
    }


    label{
        color: black;
        font-weight: bold;
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;
