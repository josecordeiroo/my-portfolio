import axios from "axios";

import Userfront from "@userfront/react";

Userfront.init("wn9qg5pn");

const accessToken = Userfront.accessToken();

const api = axios.create({
  baseURL: "/api",
});

export default api;

export const addItem = ({
  title,
  description,
  longDescription,
  imgUrl,
  technologies,
}) => {
  axios
    .post(
      `/api/portfolio`,
      {
        title,
        description,
        longDescription,
        imgUrl,
        technologies,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    .then((res) => {
      console.log("Resultado", res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const editItem = (
  slug,
  { title, description, longDescription, imgUrl, technologies }
) => {
  axios
    .patch(
      `/api/portfolio/${slug}`,
      {
        title,
        description,
        longDescription,
        imgUrl,
        technologies,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    .then((res) => {
      console.log("Resultado", res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteItem = (slug) => {
  axios
    .delete(`/api/portfolio/${slug}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => {
      console.log("Resultado", res);
    })
    .catch((err) => {
      console.log(err);
    });
};
