import { errorMessageCatch } from "../error/errorMessage";

export const getCategories = async (pageCategory) => {
  const numbers = [];
  for (let i = 1; i <= 5; i++) {
    numbers.push(i);
    if (i === 5) {
      return await getCategory(numbers, pageCategory);
    }
  }
};

const getCategory = async (numbers, pageCategory) => {
  const data = [];
  for (const number of numbers) {
    const url = `https://api.escuelajs.co/api/v1/categories/${number}/products?offset=0&limit=20`;
    const resp = await fetch(url);
    const dataResp = await resp.json();
    if (pageCategory) {
      data.push(dataResp);
    } else {
      data.push({ category: dataResp[0].category.name, data: dataResp });
    }
  }
  return pageCategory ? data.flat() : data;
};

export const getFilter = async (urlReq) => {
  const url = `https://api.escuelajs.co/api/v1/products/?${
    urlReq + "&offset=0&limit=20"
  }`;
  const resp = await fetch(url);
  if (resp !== "200") {
    errorMessageCatch.errorMessage =
      "La url a la que desea ingresar no existe.";
  } else {
    const data = await resp.json();
    return data;
  }
};
