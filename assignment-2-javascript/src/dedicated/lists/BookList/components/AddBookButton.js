import { add } from "../../../../utils";
import { Button } from "../../../../components";
import { bookContext } from "../context";

export const AddBookButton = () =>
  add(Button({ onClick: bookContext.add }), "Add new book");
