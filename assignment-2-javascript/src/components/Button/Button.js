import { importCss } from "../../styles";
import { add, cx } from "../../utils";
import { button, span } from "../DOM";

importCss("src/components/Button/Button.css");

const createRipple = ({ clientX, clientY, currentTarget: button }) => {
  let [x, y] = [clientX - button.offsetLeft, clientY - button.offsetTop];
  let ref = span({
    class: "ripple",
    style: { top: `${y}px`, left: `${x}px` },
  });

  add(button, ref);
  setTimeout(() => ref.remove(), 1000);
};

/**@typedef Props
 * @type {object}
 * @property {string=} [class]
 * @property {MouseEvent=} [onClick]
 * */

/**
 * @param {Props} [props]
 * @returns {HTMLButtonElement}
 * */
export const Button = ({ onClick, ...props } = {}) => {
  const ref = button({ ...props, class: cx("button", props.class) });

  ref.addEventListener("click", createRipple);
  if (onClick) ref.addEventListener("click", onClick);
  return ref;
};
