import { add, create } from "../../utils";

/**
 * @param label {string} - Text Label
 * @param props - Other legend props
 * @return {HTMLLegendElement} */
export const legend = ({ label, ...props }) =>
  add(create("legend", props), label);

/**
 * @param {object=} props
 * @return {HTMLFieldSetElement} */
export const fieldset = (props) => create("fieldset", props);

/**
 * @param {object=} props
 * @return {HTMLInputElement} */
export const input = (props) => create("input", props);

/**
 * @param {object=} props
 * @return {HTMLElement} */
export const footer = (props) => create("footer", props);

/**
 * @param {object=} props
 * @return {HTMLParagraphElement} */
export const p = (props) => create("p", props);

/**
 * @param {object=} props
 * @return {HTMLButtonElement} */
export const button = (props) => create("button", { type: "button", ...props });

/**
 * @param {object=} props
 * @return {HTMLSpanElement} */
export const span = (props) => create("span", props);

/**
 * @param {object=} props
 * @return {HTMLDivElement} */
export const div = (props) => create("div", props);

/**
 * @param {object=} props
 * @return {HTMLTableCellElement}*/
export const td = (props) => create("td", props);
/**
 * @param {object=} props
 * @return {HTMLTableCellElement}*/
export const th = (props) => create("th", props);

/**
 * @param {object=} props
 * @return {HTMLTableSectionElement}*/
export const thead = (props) => create("thead", props);

/**
 * @param {object=} props
 * @return {HTMLTableRowElement}*/
export const tr = (props) => create("tr", props);

/**
 * @param {object=} props
 * @return {HTMLTableElement}*/
export const table = (props) => create("table", props);

/**
 * @param {object=} props
 * @return {HTMLTableSectionElement}*/
export const tbody = (props) => create("tbody", props);

/**
 * @param {object=} props
 * @return {HTMLTableSectionElement}*/
export const stylesheet = (props) =>
  create("link", {
    rel: "stylesheet",
    type: "text/css",
    ...props,
  });
