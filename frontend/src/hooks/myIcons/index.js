export const handleBrands = (techs) => {
  const newTech = [];
  techs.map((tech) => {
    switch (tech) {
      case "React.JS":
        newTech.push({
          label: "React.JS",
          icon: "fa-react",
        });
        break;

      case "Node.JS":
        newTech.push({
          label: "Node.JS",
          icon: "fa-node",
        });
        break;

      case "Javascript":
        newTech.push({
          label: "Javascript",
          icon: "fa-js",
        });
        break;

      case "GitHub":
        newTech.push({
          label: "GitHub",
          icon: "fa-github",
        });
        break;
    }
  });
  return newTech;
};
