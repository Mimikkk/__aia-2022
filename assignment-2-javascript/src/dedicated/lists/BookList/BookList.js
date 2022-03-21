import { add, range } from "../../../utils";
import { OutlineBox, Table } from "../../../components";
import { ActionGroup, AddBookButton } from "./components";

const mockRow = () => ({
  author: "Adam Mickiewicz",
  title: "Mister Theodore",
  control: ActionGroup,
});

const tableProps = {
  columns: [
    { header: "Autor", key: "author" },
    { header: "Tytuł", key: "title" },
    { header: AddBookButton, key: "control" },
  ],
  rows: range(25).map(mockRow),
};

export const BookList = () =>
  add(OutlineBox({ label: "Book collection" }), Table(tableProps));
