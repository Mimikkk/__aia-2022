import { getApplicationRoot } from "./app.js";
import { Button, Footer, OutlineBox, Table, Title } from "./components";
import { add } from "./utils";
import { div, span } from "./components/DOM";

const root = getApplicationRoot();
add(root, Footer, Title({ title: "Hello to my book collection" }));

const headerButtonGroup = () =>
  add(
    div({
      class: "header-button-group",
      style: { display: "flex", columnGap: "0.25rem" },
    }),
    [add(Button, "Edytuj"), add(Button, "Zapisz"), add(Button, "Usuń")]
  );

const mockRow = {
  author: "Adam Mickiewicz",
  title: "Mister Theodore",
  control: headerButtonGroup,
};

const tableProps = {
  columns: [
    { header: "Autor", key: "author" },
    { header: "Tytuł", key: "title" },
    {
      header: add(Button, "Dodaj nową pozycję"),
      key: "control",
    },
  ],
  rows: [mockRow, mockRow],
};
add(root, OutlineBox, Table(tableProps));
