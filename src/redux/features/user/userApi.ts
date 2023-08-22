import { fetchWithErrors } from "@/lib/utils/fetch";
import { IUser } from "@/types";

export async function getUserData(formData: IUser): Promise<IUser> {
  const data = await fetchWithErrors(`/api/customer/login`, {
    method: "POST",
    body: JSON.stringify(formData),
  });

  return data;
}

export async function userRegistation(formData: IUser): Promise<IUser> {
  const data = await fetchWithErrors(`/api/customer/register`, {
    method: "POST",
    body: JSON.stringify(formData),
  });

  console.log(data);

  return data;
}
