import { importCss } from "../../styles";
import { cx } from "../../utils";
import { footer } from "../DOM";

importCss("src/components/Footer/Footer.css");

/** @typedef Props
 * @type {object}
 * @property {string=} class - Additional class name
 * */

/** @param props {Props=}
 * @return HTMLElement */
export const Footer = (props = {}) =>
  footer({ class: cx("footer", props.class) });
