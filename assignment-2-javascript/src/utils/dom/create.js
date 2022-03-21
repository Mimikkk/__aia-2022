import { cx } from "./cx.js";
import { css } from "./css.js";

/**
 * @typedef Props
 * @type {object}
 * @property {string=} [class] - class names
 * @property {CSSStyleDeclaration=} [style] - style object
 * */

/**
 * @param tag {string} - The tag name of the element to create.
 * @param props {Props=} - optional properties.
 * @return {HTMLElement} */
export const create = (tag, props = {}) => {
  const ref = Object.assign(document.createElement(tag), {
    ...props,
  });
  if (props.style) ref.style.cssText = css(props.style);
  if (props.class) ref.className = cx(props.class, props.className);
  return ref;
};
