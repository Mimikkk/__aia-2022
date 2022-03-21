import { getApplicationRoot } from "./app.js";
import { Button, Footer, OutlineBox, Table, Title } from "./components";
import { add, range } from "./utils";
import { div, span } from "./components/DOM";

const root = getApplicationRoot();
add(root, Footer, Title({ title: "Hello to my book collection" }));

const headerButtonGroup = () =>
  add(
    div({
      class: "header-button-group",
      style: {
        display: "flex",
        columnGap: "0.25rem",
        justifyContent: "center",
      },
    }),
    [add(Button, "Edit"), add(Button, "Save"), add(Button, "Remove")]
  );

const mockRow = () => ({
  author: "Adam Mickiewicz",
  title: "Mister Theodore",
  control: headerButtonGroup,
});

const tableProps = {
  columns: [
    { header: "Autor", key: "author" },
    { header: "Tytuł", key: "title" },
    {
      header: add(Button, "Add new book"),
      key: "control",
    },
  ],
  rows: range(25).map(mockRow),
};
add(root, OutlineBox({ label: "Book collection" }), Table(tableProps));
