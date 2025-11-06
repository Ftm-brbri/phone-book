import { El } from "../../utils/el";
import { Input } from "./input";

export function Form() {
  return El({
    element: "form",
    className: "flex flex-col gap-4",
    children: [
      El({
        element: "div",
        className: "flex justify-center items-center gap-2",

        children: [
          El({
            element: "img",
            src: "src/assets/img/telephone-receiver-svgrepo-com.svg",
            className: "",
          }),
          El({
            element: "h1",
            className: "text-4xl font-bold",
            innerText: "دفترچه تلفن",
          }),
        ],
      }),
      El({
        element: "div",
        children: [
          Input("fullName", "text", "نام و نام خانوادگی"),
          Input("phoneNumber", "number", "شماره تماس"),
        ],
      }),
      El({
        element: "button",
        className:
          "bg-[#2b6cee] w-full p-2 text-white active:scale-95 text-center font-bold",
        innerText: "افرودن مخاطب",
      }),
    ],
  });
}
