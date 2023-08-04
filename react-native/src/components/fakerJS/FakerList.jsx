import {faker} from "@faker-js/faker";

export const fakeNames = Array.from(Array(1000), () => {
  return faker.name.firstName();
});
