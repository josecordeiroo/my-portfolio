import Api from "./api";

const ProjectsService = {
  index: () => Api.get("/portfolio"),
  findOne: (id) => Api.get(`/portfolio/${id}`),
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
  editItem: (id, project) => {
    Api.patch(`/portfolio/${id}`, project, {
      headers: { "x-access-token": localStorage.getItem("token") },
    })
      .then((res) => {
        console.log("Resultado", res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  deleteItem: (id) => {
    Api.delete(`/portfolio/${id}`, {
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
