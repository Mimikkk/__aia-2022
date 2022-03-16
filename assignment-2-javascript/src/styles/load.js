import {getHeadRoot} from "../app.js";

/** @param filepath {string} */
export const loadCss = (filepath) => {
    const head = getHeadRoot();

    head.append(Object.assign(document.createElement("link"), {
        rel: "stylesheet",
        href: filepath,
        type: "text/css",
    }));
};
