// import { Product } from '../fake-data-api/product';
import { generateProducts } from "../fake-data-api/generateProducts.ts";

export function getLocalizedPaths() {
  const languages = ['en', 'fr', 'es'];
  return languages.map((lang) => ({
    params: { lang },
    props: { lang },
  }));
}

// export function getProductsArray(count: number) {
//   let products = generateProducts(count)
//   return products.map((p) => ({
//     params: { id: p.id },
//     props: { product: p }
//   }));
// }