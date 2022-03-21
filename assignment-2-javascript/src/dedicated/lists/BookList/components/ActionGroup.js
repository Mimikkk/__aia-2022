import { add } from "../../../../utils";
import { div } from "../../../../components/DOM";
import { Button } from "../../../../components";
import { importCss } from "../../../../styles";
import { bookContext } from "../context";

importCss("src/dedicated/lists/BookList/components/ActionGroup.css");

export const ActionGroup = ({ row, save, edit, remove }) =>
  add(div({ class: "action-group" }), [
    save && add(Button({ onClick: bookContext.save(row) }), "Save"),
    edit && add(Button({ onClick: bookContext.edit(row) }), "Edit"),
    remove && add(Button({ onClick: bookContext.remove(row) }), "Remove"),
  ]);
