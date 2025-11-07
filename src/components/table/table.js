import { El } from "../../utils/el";
import { Tbody } from "./tbody";
import { Thead } from "./thead";

export function Table() {
  //   let users = [];
  return El({
    element: "table",
    className: "w-full border-none  mt-6 mx-3 ",
    children: [
      El({
        element: "thead",
        className: "bg-[#f1f5f9] rounded-2xl",
        children: [
          El({
            element: "tr",
            children: [Thead("نام"), Thead("شماره"), Thead("عملیات")],
          }),
        ],
      }),
      El({
        element: "tbody",
        className: "",
        children: [Tbody()],
      }),
    ],
  });
}
