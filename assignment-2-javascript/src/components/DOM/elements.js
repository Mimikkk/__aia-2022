import { create } from "../../utils";

/**
 * @param label {string} - Text Label
 * @param props - Other legend props
 * @return {HTMLLegendElement} */
export const legend = ({ label, ...props }) =>
  create("legend", { textContent: label, ...props });

/** @return {HTMLFieldSetElement} */
export const fieldset = (props) => create("fieldset", props);

/** @return {HTMLElement} */
export const footer = (props) => create("footer", props);

/** @return {HTMLParagraphElement} */
export const p = (props) => create("p", props);

/** @return {HTMLButtonElement} */
export const button = (props) => create("button", { type: "button", ...props });

/** @return {HTMLSpanElement} */
export const span = (props) => create("span", props);

/** @return {HTMLDivElement} */
export const div = (props) => create("div", props);
