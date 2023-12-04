import * as projects from "./projects";
import * as articles from "./articles";
import * as experiences from "./experiences";
import * as techs from "./techs";
import * as techToExperience from "./techs-to-experience";

const schema = {
  ...projects,
  ...experiences,
  ...articles,
  ...techs,
  ...techToExperience,
};

export default schema;
