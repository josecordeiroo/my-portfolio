export const handleBrands = (techs) => {
  const newTech = [];
  techs.map((tech) => {
    switch (tech) {
      case "React":
        newTech.push({
          label: "React",
          icon: "fa-react",
          iconType: "brands",
        });
        break;

      case "Python":
        newTech.push({
          label: "Python",
          icon: "fa-python",
          iconType: "brands",
        });
        break;

      case "React Native":
        newTech.push({
          label: "React Native",
          icon: "fa-react",
          iconType: "brands",
        });
        break;

      case "Node.JS":
        newTech.push({
          label: "Node.JS",
          icon: "fa-node",
          iconType: "brands",
        });
        break;

      case "Javascript":
        newTech.push({
          label: "Javascript",
          icon: "fa-js",
          iconType: "brands",
        });
        break;

      case "GitHub":
        newTech.push({
          label: "GitHub",
          icon: "fa-github",
          iconType: "brands",
        });
        break;

      case "Bootstrap":
        newTech.push({
          label: "Bootstrap",
          icon: "fa-bootstrap",
          iconType: "brands",
        });
        break;

      case "FontAwesome":
        newTech.push({
          label: "FontAwesome",
          icon: "fa-font-awesome",
          iconType: "brands",
        });
        break;

      case "MongoDB":
        newTech.push({
          label: "MongoDB",
          icon: "fa-database",
          iconType: "solid",
        });
        break;

      case "MySql":
        newTech.push({
          label: "MySql",
          icon: "fa-database",
          iconType: "solid",
        });
        break;

      case "Firebase":
        newTech.push({
          label: "Firebase",
          icon: "fa-database",
          iconType: "solid",
        });
        break;
      default:
    }
    return "";
  });
  return newTech;
};
