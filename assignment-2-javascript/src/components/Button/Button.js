import {loadCss} from "../../styles/load.js";

loadCss('src/components/Button/Button.css');

/** @param clientX {number}
 * @param clientY {number}
 * @param button {HTMLButtonElement}
 * */
const createRipple = (
    {clientX, clientY},
    button
) => {
    let [x, y] = [clientX - button.offsetLeft, clientY - button.offsetTop];
    let ripple = Object.assign(document.createElement("span"), {className: "ripple"});
    ripple.style.top = `${y}px`;
    ripple.style.left = `${x}px`;

    button.append(ripple);
    setTimeout(() => ripple.remove(), 1000);
};

/**@param title {string}
 * @param onClick {MouseEvent}
 * @returns {HTMLButtonElement}
 * */
export const Button = ({title, onClick}) => {
    const button = Object.assign(document.createElement('button'), {className: 'button', textContent: title});
    button.addEventListener('click', (event) => createRipple(event, button));
    button.addEventListener('click', onClick);
    return button;
}