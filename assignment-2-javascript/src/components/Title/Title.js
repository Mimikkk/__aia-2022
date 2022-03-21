import { loadCss } from "../../styles";
import { p } from "../DOM";
import { cx } from "../../utils";

loadCss("src/components/Title/Title.css");

/** @typedef Props
 * @property {string=} [class]
 * @property {string} [title]
 * */

/** @param props {Props}
 * @return HTMLParagraphElement */
export const Title = ({ title, ...props }) =>
  p({ class: cx("title", props.class), textContent: title });
