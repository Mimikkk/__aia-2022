import { ApplicationRoot } from "./app.js";
import { Footer, Title } from "./components";
import { add } from "./utils";
import { BookList } from "./dedicated";

add(ApplicationRoot, [
  add(Footer, Title({ title: "Welcome to my book collection" })),
  BookList,
]);
