export const getCategories = async () => {
  const numbers = [];
  for (let i = 1; i <= 5; i++) {
    numbers.push(i);
    if (i === 5) {
      return await getCategory(numbers);
    }
  }
};

const getCategory = (numbers) => {
  const data = [];
  numbers.forEach(async (number) => {
    const url = `https://api.escuelajs.co/api/v1/categories/${number}/products?offset=0&limit=10`;
    const resp = await fetch(url);
    const dataResp = await resp.json();
    data.push({ category: dataResp[0].category.name, data: dataResp });
  });
  return data;
};
