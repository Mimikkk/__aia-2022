import { importCss } from "../../styles";
import { add, cx } from "../../utils";
import { table, tbody, td, th, thead, tr } from "../DOM";

importCss("src/components/Table/Table.css");

/** @typedef Props {
 * @property {object[]} columns the columns to display in the table
 * @property {object[]} rows the rows to display in the table
 * @property {string=} [class] the class name to apply to the table
 */

/** @param props {Props}
 * @return {HTMLTableElement} */
export const Table = (props) => {
  const columns = props.columns.map(({ header }) =>
    add(th({ class: "column-cell" }), header)
  );

  const rows = props.rows.map((row) => {
    const rowcolumns = props.columns.map(({ key }) =>
      add(td({ class: "row-cell" }), row[key])
    );
    return add(tr, rowcolumns);
  });

  return add(table({ class: cx("table", props.class) }), [
    add(thead, tr, columns),
    add(tbody, rows),
  ]);
};
