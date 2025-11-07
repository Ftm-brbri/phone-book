import { Form } from "./components/form/form";
import "../src/style/style.css";
import { Table } from "./components/table/table";

const app = document.getElementById("app");
app.append(Form(), Table());
