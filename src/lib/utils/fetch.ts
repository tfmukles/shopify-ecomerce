import Error from "next/error";

export async function fetchWithErrors(url: string, options?: RequestInit) {
  const response = await fetch(url, options);
  const data = await response.json();

  if (!response.ok) {
    console.log({ data });
    throw new Error("Errror Message");
  }

  return data;
}
