import { HeadRoot } from "../app.js";
import { add } from "../utils";
import { stylesheet } from "../components/DOM";

/** @type {string[]}*/
const filepaths = [];

/** @param filepath {string} */
export const importCss = (filepath) => {
  if (filepaths.includes(filepath)) return;
  filepaths.push(filepath);

  add(HeadRoot, stylesheet({ href: filepath }));
};
