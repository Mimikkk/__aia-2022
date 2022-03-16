import {getHeadRoot} from "../app.js";

/** @type {string[]}*/
const filepaths = []
/** @param filepath {string} */
export const loadCss = (filepath) => {
    if (filepaths.includes(filepath)) return;
    filepaths.push(filepath);

    const head = getHeadRoot();
    head.append(Object.assign(document.createElement("link"), {
        rel: "stylesheet",
        href: filepath,
        type: "text/css",
    }));
};
