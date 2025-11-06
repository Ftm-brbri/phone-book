import { GetUserData } from "../../api/api";
import { El } from "../../utils/el";

export async function Tbody() {
  const users = await GetUserData();
  const tbody = document.getElementById("tableBody");

  users.forEach((user) => {
    const tr = El({
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
    tbody.append(tr);
  });
  return tbody;
}
