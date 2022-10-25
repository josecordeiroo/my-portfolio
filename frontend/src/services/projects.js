import Api from "./api";

const ProjectsService = {
  index: () => Api.get("/project"),
  findOne: (id) => Api.get(`/project/${id}`),
  addItem: (project) => {
    Api.post(`/project`, project, {
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
    Api.patch(`/project/${id}`, project, {
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
    Api.delete(`/project/${id}`, {
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
