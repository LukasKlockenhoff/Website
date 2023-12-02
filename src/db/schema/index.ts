import * as projects from "./projects";
import * as articles from "./articles";
import * as experiences from "./experiences";

const schema = {
  ...projects,
  ...experiences,
  ...articles,
};

export default schema;
