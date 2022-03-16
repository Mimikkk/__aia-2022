import {loadCss} from "../../styles/load.js";

loadCss('src/components/Footer/Footer.css');

/** @param className {string | undefined}
 * @return HTMLElement */
export const Footer = ({className}) => {
    const element = Object.assign(document.createElement('footer'), {className: 'footer'});
    if (className) element.classList.add(className);
    return element;
}
