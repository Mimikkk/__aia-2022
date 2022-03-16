import {loadCss} from "../../styles/load.js";

loadCss('src/components/Title/Title.css');

/** @param title {string}
 * @param className {string | undefined}
 * @return HTMLParagraphElement */
export const Title = ({title, className}) => {
    const element = Object.assign(document.createElement('p'), {
        className: 'title',
        textContent: title,
    });
    if (className) element.classList.add(className);
    return element;
}
