import { add, cx } from "../../utils";
import { fieldset, legend } from "../DOM";
import { importCss } from "../../styles";

importCss("src/components/OutlineBox/OutlineBox.css");

/** @param label {string | undefined}
 * @param centered {boolean | undefined}
 * @param className {string | undefined}
 * @return {HTMLFieldSetElement}
 * */
export const OutlineBox = ({
  className,
  label,
  centered = true,
  ...props
} = {}) =>
  add(
    fieldset({
      className: cx(
        "outline-box",
        label && "labeled",
        centered && "centered",
        className
      ),
      ...props,
    }),
    label && legend({ label })
  );
