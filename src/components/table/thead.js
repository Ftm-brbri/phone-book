import { El } from "../../utils/el";

export function Thead(input) {
  return El({
    element: "th",
    className: "font-semibold p-2",
    innerText: input,
  });
}
