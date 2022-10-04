import Api from "./api";

const ProjectsService = {
  index: () => Api.get("/portfolio"),
  addItem: ({ title, description, longDescription, imgUrl, technologies }) => {
    Api.post(
      `/api/portfolio`,
      {
        title,
        description,
        longDescription,
        imgUrl,
        technologies,
      },
      {
        headers: { "x-access-token": localStorage.getItem("token") },
      }
    )
      .then((res) => {
        console.log("Resultado", res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  editItem: (
    slug,
    { title, description, longDescription, imgUrl, technologies }
  ) => {
    Api.patch(
      `/api/portfolio/${slug}`,
      {
        title,
        description,
        longDescription,
        imgUrl,
        technologies,
      },
      {
        headers: { "x-access-token": localStorage.getItem("token") },
      }
    )
      .then((res) => {
        console.log("Resultado", res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  deleteItem: (slug) => {
    Api.delete(`/api/portfolio/${slug}`, {
      headers: { "x-access-token": localStorage.getItem("token") },
    })
      .then((res) => {
        console.log("Resultado", res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

export default ProjectsService;
