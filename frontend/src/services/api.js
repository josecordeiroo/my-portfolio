import axios from "axios";

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
    .post(`/api/portfolio`, {
      title,
      description,
      longDescription,
      imgUrl,
      technologies,
    })
    .then((res) => {
      console.log("Resultado", res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const editItem = (slug, {
  title,
  description,
  longDescription,
  imgUrl,
  technologies,
}) => {
  axios
    .patch(`/api/portfolio/${slug}`, {
      title,
      description,
      longDescription,
      imgUrl,
      technologies,
    })
    .then((res) => {
      console.log("Resultado", res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteItem = (slug) => {
  axios
    .delete(`/api/portfolio/${slug}`)
    .then((res) => {
      console.log("Resultado", res);
    })
    .catch((err) => {
      console.log(err);
    });
};

