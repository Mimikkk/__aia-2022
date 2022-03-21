import { add, range } from "../../../utils";
import { OutlineBox, Table } from "../../../components";
import { ActionGroup, AddBookButton } from "./components";
import { importCss } from "../../../styles";
import { bookContext } from "./context";

importCss("src/dedicated/lists/BookList/BookList.css");

const mockRow = () => ({
  author: "Adam Mickiewicz",
  title: "Mister Theodore",
  control: ActionGroup,
});

const tableProps = {
  columns: [
    { header: "Autor", key: "author" },
    { header: "Tytuł", key: "title" },
    {
      header: AddBookButton({
        onClick: () => {
          console.log("xd");
        },
      }),
      key: "control",
    },
  ],
  rows: [],
  class: "book-list",
};

export const BookList = () =>
  add(
    OutlineBox({ label: "Book collection" }),
    (bookContext.ref = Table(tableProps))
  );
