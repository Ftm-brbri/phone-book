import { GetUserData } from "../../api/api";
import { El } from "../../utils/el";

let users = await GetUserData();
console.log(users);
export function Tbody() {
  users.forEach((user) => {
    return El({
      element: "tr",
      className: "",
      children: [
        El({
          element: "td",
          innerText: user.name,
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

              //   eventListener: [
              //     {
              //       event: "click",
              //       callback: () => handleEdit(user.id),
              //     },
              //   ],
            }),
            El({
              element: "button",
              innerText: "🗑️حذف",
              //   eventListener: [
              //     {
              //       event: "click",
              //       callback: () => handleDelete(user.id),
              //     },
              //   ],
            }),
          ],
        }),
      ],
    });
  });
}
