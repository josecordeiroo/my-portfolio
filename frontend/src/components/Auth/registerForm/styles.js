import { motion } from "framer-motion/dist/framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  
`;


export const LoginText = styled.p`
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
`