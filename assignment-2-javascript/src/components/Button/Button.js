import {loadCss} from "../../styles/load.js";

loadCss('src/components/Button/Button.css');

const createRipple = (
    { clientX, clientY },
    button
) => {
    let [x, y] = [clientX - button.offsetLeft, clientY - button.offsetTop];
    let ripple = Object.assign(document.createElement("span"), { className: "ripple" });
    ripple.style.top = `${y}px`;
    ripple.style.left = `${x}px`;

    button.append(ripple);
    setTimeout(() => ripple.remove(), 1000);
};

export const Button = ({title}) => {
    const button = Object.assign(document.createElement('button'), {className: 'button', textContent: title});
    button.addEventListener('click', (event) => createRipple(event, button));
    return button;
}