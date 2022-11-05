import { motion } from "framer-motion/dist/framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  p {
    color: black;
    font-weight: bold;
  }
`;

export const LoginText = styled.div`
  color: green;
  font-weight: lighter;
  margin-top: 10px;
  margin-bottom: -20px;
  padding: 7px;
  border-radius: 10px;
`;

export const Title = styled.h1`
  font-size: 15px;
  padding-bottom: 20px;
  font-weight: bold;
`;

export const Input = styled.input`
  border-radius: 7px;
  width: 100%;
  height: 100%;
  padding: 10px;
  margin-right: 10px;
  border: none;
  background-color: #e6fff8;
  color: gray;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px #23d997;
  }
  &::placeholder {
    color: #b7b7b7;
  }
`;

export const Label = styled.label`
  text-align: left;
  padding: 5px;
`;

export const Field = styled.div`
  text-align: left;
`;

export const ShowPasswordText = styled.p`
  text-align: right;
  font-size: 10px;
  cursor: pointer;
  padding-top: 5px;
  font-weight: lighter;
`;

export const Terms = styled.span`
  cursor: pointer;
  font-weight: bold;
  color: #0000ee;
`;

export const DivTerms = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
  p {
    font-size: 13px;
    margin-left: 7px;
  }
  span {
  }
  input {
    margin-bottom: 17px;
  }
  
`;


export const Button = styled.button`
  
`
