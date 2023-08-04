import { faker } from "@faker-js/faker";

export const fakeNames = Array.from(Array(10000), () => {
  return faker.name.firstName();
});
