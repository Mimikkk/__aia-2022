import { clear } from "./clear.js";
import { add } from "./add.js";

/**
 * @typedef NodeElement
 * @type {string | number | undefined | HTMLElement | (() => NodeElement)}
 * */

/**@param parent {HTMLElement=}
 * @param elements {NodeElement | NodeElement[]}
 * */
export const replace = (parent, ...elements) => add(clear(parent), ...elements);
