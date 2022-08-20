import axios from "axios";

export const save = (data) => {
  const config = {
    method: "post",
    url: "https://sheet.best/api/sheets/0d7c27dd-97da-4044-b473-c033b5a640cc",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  };

  axios(config)
    .then((res) => {
      console.log("Dados da planilha", res);
    })
    .catch((err) => {
      console.log(err);
    });
};
