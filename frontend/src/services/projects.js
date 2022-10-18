import Api from "./api";

const ProjectsService = {
  index: () => Api.get("/portfolio"),
  findOne: (slug) => Api.get(`/portfolio/${slug}`),
  addItem: (project) => {
    Api.post(`/portfolio`, project, {
      headers: { "x-access-token": localStorage.getItem("token") },
    })
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
      `/portfolio/${slug}`,
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
    Api.delete(`/portfolio/${slug}`, {
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
