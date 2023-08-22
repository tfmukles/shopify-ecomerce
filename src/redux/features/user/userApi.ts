import { IUser } from "@/types";

export async function getUserData(formData: IUser): Promise<IUser> {
  const res = await fetch("/api/customer/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  return await res.json();
}

export async function userRegistation(formData: IUser) {
  try {
    const res = await fetch("/api/customer/register", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return await res.json();
  } catch (error: any) {
    console.log(error?.message);
  }
}
