import { sayHello } from "../src/say-hello";
describe("sayHello", function () {
  it("should greet the person with their name", function () {
    expect(sayHello("Budi")).toBe("Hello, Budi!");
  });
});
