import { add } from "../../../../utils";
import { div } from "../../../../components/DOM";
import { Button } from "../../../../components";
import { importCss } from "../../../../styles";

importCss("src/dedicated/lists/BookList/components/ActionGroup.css");

export const ActionGroup = () =>
  add(div({ class: "action-group" }), [
    add(Button, "Edit"),
    add(Button, "Save"),
    add(Button, "Remove"),
  ]);
