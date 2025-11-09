import { generateProducts } from "../fake-data-api/generateProducts.ts";

export function useLang(Astro: any) {
  return Astro.props.lang || 'en';
}

export function useProd(Astro: any) {
  return Astro.props.p || generateProducts(1); // to update
}