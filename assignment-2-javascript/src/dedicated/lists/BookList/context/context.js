import { add, replace } from "../../../../utils";
import { ActionGroup } from "../components";
import { input, td } from "../../../../components/DOM";

export const Textfield = (value) =>
  input({
    type: "text",
    value: value || "",
    maxLength: 36,
    class: "text-field",
  });

const context = {
  /** @type {HTMLTableElement}*/
  ref: null,

  add: () => {
    const [body] = context.ref.getElementsByTagName("tbody");
    const row = body.insertRow();

    add(row, [
      add(td, Textfield),
      add(td, Textfield),
      add(td, ActionGroup({ row, save: true, remove: true })),
    ]);
  },

  /**@param row {HTMLTableRowElement}*/
  save: (row) => () => {
    const [author, title, controls] = row.getElementsByTagName("td");

    replace(author, author.firstChild.value || "No Author");
    replace(title, title.firstChild.value || "No Title");
    replace(controls, ActionGroup({ row, edit: true, remove: true }));
  },

  /**@param row {HTMLTableRowElement}*/
  edit: (row) => () => {
    const [author, title, controls] = row.getElementsByTagName("td");

    replace(author, Textfield(author.textContent));
    replace(title, Textfield(title.textContent));
    replace(controls, ActionGroup({ row, save: true, remove: true }));
  },

  /**@param row {HTMLTableRowElement}*/
  remove: (row) => () => context.ref.deleteRow(row.rowIndex),
};

export { context as bookContext };
