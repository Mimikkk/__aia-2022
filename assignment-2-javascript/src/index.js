import {getApplicationRoot} from './app.js';
import {Title, Table} from "./components";
import {Button} from "./components/Button";

const root = getApplicationRoot();

root.appendChild(Title({title: "Welcome to my book collection"}));
const button = Button({title: "Add new book"});

const headerButtonGroup = Object.assign(document.createElement("div"), {className: "header-button-group"});
headerButtonGroup.appendChild(Button({title: "Edit"}));
headerButtonGroup.appendChild(Button({title: "Save"}));
headerButtonGroup.appendChild(Button({title: "Remove"}));

const tableProps = {
    ref: null,
    columns: [
        {header: "Abcd", key: "author"},
        {header: "Defg", key: "title"},
        {header: button, key: "control"},
    ],
    rows: [{author: "Adam Mickiewicz", title: "Mister Theodore", control: headerButtonGroup}],
}
root.append(Table(tableProps));
console.log({tableProps})