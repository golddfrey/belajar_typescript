import { tambah } from "../src/math";
describe("tambah", function () {
  it("should return the sum of two numbers", function () {
    console.log(tambah(2, 3));
    expect(tambah(2, 3)).toBe(5);
  });
});
