import styled from "styled-components";

export const Container = styled.div`
  input {
    color: gray;
    width: 100%;
  }
  textarea {
    color: gray;
  }
`;

export const Form = styled.form`
  margin: 0 40px 0 40px;
  input,
  textarea {
    border: none;
    background: #f3f3f3;
    border-radius: 5px;
    font-size: 15px;
    padding: 5px 5px 5px 10px;
  }
  .short {
    width: 100%;
    height: 70px;
  }
  .complete {
    width: 100%;
    height: 110px;
  }
  @media (max-width: 1200px) {
    margin: 0 10px 0 10px;
  }
`;
export const DescriptionArea = styled.div`
  .header {
    input {
      width: 100%;
    }
  }
  .dateAdd {
    color: black;
    padding-top: 10px;
    font-size: 12px;
    text-align: right;
  }

  .bigger {
    width: 100%;
    input {
      width: 100%;
    }
  }

  @media (max-width: 1200px) {
    .bigger {
      input {
        width: 100%;
      }
    }
    .dateAdd {
      font-size: 10px;
    }
  }
`;

export const Technologies = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  svg {
    color: #23d997;
  }

  @media (max-width: 1200px) {
    padding-top: 1rem;
  }
`;

export const Technology = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #23d997;
  cursor: pointer;
  padding: 15px;
`;

export const TechsDiv = styled.div`
  width: auto;
  border: 1px #d9d9d9 solid;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  margin-bottom: 15px;
  h4 {
    margin-bottom: 10px;
    color: #383838;
    font-weight: 400;
  }
`;

export const PicturesDiv = styled.div`
  .addInputAndButton {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    input {
      width: 100%;
    }
    label {
      width: 10%;
    }
  }
  input {
    width: 88%;
  }
  img {
    width: 100px;
    height: 80px;
    margin-top: 20px;
    cursor: pointer;
  }
  label {
    padding: 6px;
    margin-right: 7px;
    color: black;
    cursor: pointer;
  }
  .smallImgsDiv {
    display: flex;
    justify-content: space-evenly;
  }
  .smallImgs {
    text-align: center;
  }
  .secondButton {
    margin-top: 5px;
  }
`;

export const ModalImg = styled.img`
  width: 100%;
`;
