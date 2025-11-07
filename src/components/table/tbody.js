import { El } from "../../utils/el";

export function Tbody(user,handleEdit,handleDelete) {
  return El({
    element: "tr",
    className: "",
    children: [
      El({
        element: "td",
        innerText: user.fullName,
      }),
      El({
        element: "td",
        innerText: user.phoneNumber,
      }),
      El({
        element: "td",
        children: [
          El({
            element: "button",
            innerText: "✏️ویرایش",
            eventListener: [
              {
                event: "click",
                callback: () => handleEdit(user.id),
              },
            ],
          }),
          El({
            element: "button",
            innerText: "🗑️حذف",
            eventListener: [
              {
                event: "click",
                callback: () => handleDelete(user.id),
              },
            ],
          }),
        ],
      }),
    ],
  });
}
