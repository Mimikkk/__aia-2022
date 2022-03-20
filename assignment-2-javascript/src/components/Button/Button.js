import { loadCss } from "../../styles";
import { cx } from "../../utils";
import { button, span } from "../DOM";

loadCss("src/components/Button/Button.css");

/**
 * @param button {HTMLButtonElement}
 * */
const createRipple =
  (button) =>
  ({ clientX, clientY }) => {
    let [x, y] = [clientX - button.offsetLeft, clientY - button.offsetTop];
    let ref = span({
      class: "ripple",
      style: { top: `${y}px`, left: `${x}px` },
    });

    button.append(ref);
    setTimeout(() => ref.remove(), 1000);
  };

/**@typedef Props
 * @type {object}
 * @property {string=} [class]
 * @property {string=} [title]
 * @property {MouseEvent=} [onClick]
 * */

/**
 * @param {Props} [props]
 * @returns {HTMLButtonElement}
 * */
export const Button = ({ title, onClick, ...props }) => {
  const ref = button({
    class: cx("button", props.class),
    textContent: title,
    ...props,
  });

  ref.addEventListener("click", createRipple(ref));
  ref.addEventListener("click", onClick);
  return ref;
};
