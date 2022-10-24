import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background: #444;
    box-shadow: 0 0 1px 1px #111, inset 0 0 4px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: gray;
    box-shadow: inset 0 0 1px 1px #646464;
  }
    }

    html{ 
        @media (max-width: 1200px){
            font-size: 50%;
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
    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;
