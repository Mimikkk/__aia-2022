import { loadCss } from "../../styles/load.js";
import { p } from "../DOM";
import { cx } from "../../utils";

loadCss("src/components/Title/Title.css");

/** @param title {string}
 * @param class {string | undefined}
 * @return HTMLParagraphElement */
export const Title = ({ title, ...props }) =>
  p({ class: cx("title", props.class), textContent: title });
