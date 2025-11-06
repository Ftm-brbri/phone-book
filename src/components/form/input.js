import { El } from "../../utils/el";

export function Input(name, type, placeholder) {
  return El({
    element: "input",
    type: type,
    placeholder: placeholder,
    id: name,
    className:
      "w-full bg-[#f8fafc] p-2 border border-[#d8dfe8] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4",
  });
}
