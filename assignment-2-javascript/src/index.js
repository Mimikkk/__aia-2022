import { getApplicationRoot } from "./app.js";
import { OutlineBox, Footer, Title, Button, Table } from "./components";
import { add } from "./utils";
import { div } from "./components/DOM";

const root = getApplicationRoot();
add(root, Footer, Title({ title: "Hello to my book collection" }));

const headerButtonGroup = () =>
  add(div({ class: "header-button-group" }), [
    Button({ title: "Edit" }),
    Button({ title: "Save" }),
    Button({ title: "Remove" }),
  ]);

const button = Button({ title: "Add new book" });
const tableProps = {
  ref: null,
  columns: [
    { header: "Abcd", key: "author" },
    { header: "Defg", key: "title" },
    { header: button, key: "control" },
  ],
  rows: [
    {
      author: "Adam Mickiewicz",
      title: "Mister Theodore",
      control: headerButtonGroup,
    },
    {
      author: "Adam Mickiewicz",
      title: "Mister Theodore",
      control: headerButtonGroup,
    },
    {
      author: "Adam Mickiewicz",
      title: "Mister Theodore",
      control: headerButtonGroup,
    },
    {
      author: "Adam Mickiewicz",
      title: "Mister Theodore",
      control: headerButtonGroup,
    },
    {
      author: "Adam Mickiewicz",
      title: "Mister Theodore",
      control: headerButtonGroup,
    },
    {
      author: "Adam Mickiewicz",
      title: "Mister Theodore",
      control: headerButtonGroup,
    },
    {
      author: "Adam Mickiewicz",
      title: "Mister Theodore",
      control: headerButtonGroup,
    },
    {
      author: "Adam Mickiewicz",
      title: "Mister Theodore",
      control: headerButtonGroup,
    },
    {
      author: "Adam Mickiewicz",
      title: "Mister Theodore",
      control: headerButtonGroup,
    },
    {
      author: "Adam Mickiewicz",
      title: "Mister Theodore",
      control: headerButtonGroup,
    },
    {
      author: "Adam Mickiewicz",
      title: "Mister Theodore",
      control: headerButtonGroup,
    },
    {
      author: "Adam Mickiewicz",
      title: "Mister Theodore",
      control: headerButtonGroup,
    },
    {
      author: "Adam Mickiewicz",
      title: "Mister Theodore",
      control: headerButtonGroup,
    },
  ],
};

add(root, OutlineBox({ label: "Autorzy" }), Table(tableProps));
console.log({ tableProps });
