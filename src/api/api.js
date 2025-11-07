import { BASE_URL } from "../constants/api";

export async function GetUserData() {
  try {
    const response = await fetch(BASE_URL);
    // if (!response.ok) throw new Error("fail to get user data");
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
