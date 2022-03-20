import { getApplicationRoot } from "./app.js";
import { OutlineBox, Footer, Title, Button } from "./components";
import { add } from "./utils";

const root = getApplicationRoot();
add(root, Footer, Title({ title: "Hello to my book collection" }));

add(root, OutlineBox({ label: "xD" }), [Button({ title: "Click me" })]);

// const button = Button({ title: "Add new book" });
// const headerButtonGroup = Object.assign(document.createElement("div"), {
//   className: "header-button-group",
// });
// headerButtonGroup.appendChild(Button({ title: "Edit" }));
// headerButtonGroup.appendChild(Button({ title: "Save" }));
// headerButtonGroup.appendChild(Button({ title: "Remove" }));

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
// root.append(Table(tableProps));
// console.log({ tableProps });
