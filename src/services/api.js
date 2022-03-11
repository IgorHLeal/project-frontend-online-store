export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const request = await fetch(url);
  const data = await request.json();
  return data;
}

export async function getProductsFromQuery(query) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const requestItem = await fetch(url);
  const dataItem = requestItem.json();
  return dataItem;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`;
  const requestItem = await fetch(url);
  const dataItem = requestItem.json();
  return dataItem;
}
