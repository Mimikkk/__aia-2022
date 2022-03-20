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

const Counter = () => {
  const store = new Proxy(
    { value: 5, xd: "Xddd" },
    {
      set(target, p, value, receiver) {
        console.log(target, p, value, receiver);
        return false;
      },
    }
  );

  console.log(store);

  return add(
    div({
      style: {
        display: "flex",
      },
    }),
    [
      Button({
        title: "-",
        style: { width: "3rem", height: "3rem" },
        onClick: () => (store.value -= -1),
      }),
      add(
        OutlineBox({
          style: { width: "3rem", height: "3rem" },
        }),
        store.value
      ),
      Button({
        title: "+",
        style: { width: "3rem", height: "3rem" },
        onClick: () => (store.value += 1),
      }),
    ]
  );
};

add(root, OutlineBox, Counter);

// const tableProps = {
//   ref: null,
//   columns: [
//     { header: "Abcd", key: "author" },
//     { header: "Defg", key: "title" },
//     { header: button, key: "control" },
//   ],
//   rows: [
//     {
//       author: "Adam Mickiewicz",
//       title: "Mister Theodore",
//       control: headerButtonGroup,
//     },
//     {
//       author: "Adam Mickiewicz",
//       title: "Mister Theodore",
//       control: headerButtonGroup,
//     },
//     {
//       author: "Adam Mickiewicz",
//       title: "Mister Theodore",
//       control: headerButtonGroup,
//     },
//     {
//       author: "Adam Mickiewicz",
//       title: "Mister Theodore",
//       control: headerButtonGroup,
//     },
//     {
//       author: "Adam Mickiewicz",
//       title: "Mister Theodore",
//       control: headerButtonGroup,
//     },
//     {
//       author: "Adam Mickiewicz",
//       title: "Mister Theodore",
//       control: headerButtonGroup,
//     },
//     {
//       author: "Adam Mickiewicz",
//       title: "Mister Theodore",
//       control: headerButtonGroup,
//     },
//     {
//       author: "Adam Mickiewicz",
//       title: "Mister Theodore",
//       control: headerButtonGroup,
//     },
//     {
//       author: "Adam Mickiewicz",
//       title: "Mister Theodore",
//       control: headerButtonGroup,
//     },
//     {
//       author: "Adam Mickiewicz",
//       title: "Mister Theodore",
//       control: headerButtonGroup,
//     },
//     {
//       author: "Adam Mickiewicz",
//       title: "Mister Theodore",
//       control: headerButtonGroup,
//     },
//     {
//       author: "Adam Mickiewicz",
//       title: "Mister Theodore",
//       control: headerButtonGroup,
//     },
//     {
//       author: "Adam Mickiewicz",
//       title: "Mister Theodore",
//       control: headerButtonGroup,
//     },
//   ],
// };
// add(root, OutlineBox({ label: "Autorzy" }), Table(tableProps));
