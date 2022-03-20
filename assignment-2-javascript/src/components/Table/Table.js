import { loadCss } from "../../styles/load.js";
import { addChild } from "../../utils";

loadCss("src/components/Table/Table.css");

/** @typedef Props {
 * @prop {object[]} columns the columns to display in the table
 * @prop {object[]} rows the rows to display in the table
 * @prop {string} [className] the class name to apply to the table
 * @prop {string} ref the reference to apply to the props object
 */

/** @param props {Props}
 * @return {HTMLTableElement} */
export const Table = (props) => {
  const { columns, rows, className } = props;
  const table = Object.assign(document.createElement("table"), {
    className: `table`,
  });
  if (className) table.classList.add(className);

  const header = document.createElement("thead");
  const headerRow = document.createElement("tr");
  columns.forEach(({ header }) => {
    const cell = Object.assign(document.createElement("th"), {
      className: "column-cell",
    });
    addChild(cell, header);
    addChild(headerRow, cell);
  });

  const body = document.createElement("tbody");
  rows.forEach((row) => {
    const rowElement = document.createElement("tr");
    columns.forEach(({ key }) => {
      const cell = Object.assign(document.createElement("td"), {
        className: "row-cell",
      });
      addChild(cell, row[key]);
      addChild(rowElement, cell);
    });
    addChild(body, rowElement);
  });

  header.appendChild(headerRow);
  table.appendChild(header);
  table.appendChild(body);

  props.ref = table;
  return table;
};
