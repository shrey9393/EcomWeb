export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    // TODO: we will note hardcode this
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve({ data });
  });
}
export function fetchProductsByFilter(filter) {
  // TODO: add multiple selection feature
  let queryString = "";
  for (let key in filter) {
    queryString += `${key}=${filter[key]}&`;
  }
  return new Promise(async (resolve) => {
    // TODO: we will note hardcode this
    const response = await fetch(
      "http://localhost:8080/products?" + queryString
    );
    const data = await response.json();
    resolve({ data });
  });
}
