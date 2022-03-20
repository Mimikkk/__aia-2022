import { add, cx } from "../../utils";
import { fieldset, legend } from "../DOM";
import { loadCss } from "../../styles";

loadCss("src/components/OutlineBox/OutlineBox.css");

/** @param label {string | undefined}
 * @param centered {boolean | undefined}
 * @param className {string | undefined}
 * @return {HTMLFieldSetElement}
 * */
export const OutlineBox = ({ className, label, centered = true } = {}) =>
  add(
    fieldset({
      className: cx(
        "outline-box",
        label && "labeled",
        centered && "centered",
        className
      ),
    }),
    label && legend({ label })
  );
