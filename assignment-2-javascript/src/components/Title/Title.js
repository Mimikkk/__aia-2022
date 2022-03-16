import {loadCss} from "../../styles/load.js";

loadCss('src/components/Title/Title.css');

/** @param content {string}
 * @return HTMLParagraphElement */
export const Title = (content) => Object.assign(document.createElement('p'), {
    className: 'title',
    textContent: content,
})
