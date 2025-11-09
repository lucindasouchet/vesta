import { faker } from "@faker-js/faker";
import { Product } from "./product.ts";

export function generateProducts(count: number): Product[] {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    reference: faker.commerce.isbn(10),
    model: faker.commerce.isbn({variant: 13, separator: '-'}),
    price: parseFloat(faker.commerce.price({ min: 10, max: 1000 })),
    category: faker.commerce.department(),
    imageUrl: faker.image.urlLoremFlickr({ category: "product" }),
    createdAt: faker.date.past(),
  }));
}
