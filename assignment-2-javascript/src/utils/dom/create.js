import { cx } from "./cx.js";

/**
 * @typedef Props
 * @type {object}
 * @property {string=} [class] - class names
 * @property {CSSStyleDeclaration=} [style] - style object
 * */

/** @param style {CSSStyleDeclaration} */
export const styled = (style) =>
  Object.entries(style)
    .map(([k, v]) => `${k}:${v}`)
    .join(";")
    .replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);

/**
 * @param tag {string} - The tag name of the element to create.
 * @param props {Props=} - optional properties.
 * @return {HTMLElement} */
export const create = (tag, props = {}) => {
  const ref = Object.assign(document.createElement(tag), {
    ...props,
  });
  if (props.style) ref.style.cssText = styled(props.style);
  if (props.class) ref.className = cx(props.class, props.className);
  return ref;
};
