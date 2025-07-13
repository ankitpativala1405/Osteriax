import { ApiUrl } from "./api";

export const BookTableMethod = {
  GetAll: async () => {
    let req = await fetch(ApiUrl.tabledata);
    let res = await req.json();
    return res;
  },
  PostData: async (data) => {
    let request = await fetch(ApiUrl.tabledata, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return request;
  },
};