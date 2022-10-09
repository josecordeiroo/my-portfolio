import Api from "./api";

const AboutMeService = {
  index: () => Api.get("/admin/634336219a67e8a3192d8edb"),
  update: ({ name, description }) => {
    Api.patch(
      `/admin/634336219a67e8a3192d8edb`,
      {
        name,
        description,
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
};

export default AboutMeService;
