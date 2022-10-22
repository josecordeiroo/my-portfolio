import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: #1b1b1b;
`;

export const StyledNav = styled.nav`
  height: 50px;
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  padding: 1rem 10rem;
  position: sticky;
  top: 0;
  left: 0;
  color: white;
  box-shadow: 5px 1px 20px 1px black;

  .countrys {
    display: flex;
    position: absolute;
    right: 50px;
    img {
      width: 15px;
      margin-right: 5px;
      padding-bottom: 3px;
    }
    .pt {
      margin-right: 15px;
      font-size: 12px;
      cursor: pointer;
    }
    .us {
      font-size: 12px;
      cursor: pointer;
    }
  }

  .medias {
    display: flex;
    position: absolute;
    left: 50px;
    a {
      font-size: 15px;
      margin-right: 8px;
      transition: transform 0.2s;
    }
    a:hover {
      img {
        transition: transform 0.2s;
        transform: scale(1.3);
      }
    }
    img {
      width: 15px;
      margin-right: 5px;
      padding-bottom: 3px;
    }
    .wpp {
      img {
        width: 20px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-right: 3rem;
    padding-top: 1rem;
    font-size: 20px;
  }
  a {
    font-size: 20px;
    text-decoration: none;
    color: white;
    transition: 1s;
  }
  a:hover {
    color: #23d997;
    transition: 0.3s;
  }
  .home {
    font-size: 50px;
  }
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const NavMobile = styled.div`
  display: none;
  @media only screen and (max-width: 1200px) {
    height: 90px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    color: white;
    box-shadow: 5px 1px 20px 1px black;

    ul {
      display: flex;
      list-style: none;
    }
    li {
      padding-right: 3rem;
      padding-top: 1rem;
      font-size: 20px;
    }
    a {
      font-size: 20px;
      text-decoration: none;
      color: white;
      transition: 1s;
    }
    a:hover {
      color: #23d997;
      transition: 0.3s;
    }
    .home {
      font-size: 50px;
    }
  }

  .leftNav {
    img {
      width: 50px;
      margin-top: 15px;
      margin-left: 15px;
    }
  }
  .rightNav {
    width: 70%;
    margin-top: 10px;
    margin-right: 10px;
    .medias {
      margin-top: 10px;
      display: flex;
      justify-content: start;
      a {
        font-size: 15px;
        transition: transform 0.2s;
      }
      a:hover {
        img {
          transition: transform 0.2s;
          transform: scale(1.3);
        }
      }
      img {
        width: 15px;
        margin-right: 5px;
        padding-bottom: 3px;
      }
      .wpp {
        img {
          width: 20px;
        }
      }
    }
    .countrys {
      padding-left: 15px;
      display: flex;
      justify-content: start;
      img {
        width: 25px;
        margin-right: 5px;
        padding-bottom: 3px;
      }
      .pt {
        margin-right: 15px;
        font-size: 12px;
        cursor: pointer;
      }
      .us {
        font-size: 12px;
        cursor: pointer;
      }
    }
  }
`;

export const Burguer = styled.div`
  .burguer {
    display: flex;
    justify-content: space-evenly;
    padding: 20px;
    font-size: 12px;
    color: white;
    a {
      text-decoration: none;
      color: white;
      padding: 5px;
    }
  }
`;
