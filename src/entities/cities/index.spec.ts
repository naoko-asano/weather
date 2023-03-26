import { findCity } from ".";

describe("findCity", () => {
  test.each([
    { code: "13", name: "東京" },
    { code: "14", name: "神奈川" },
  ])(
    "引数で渡されたcityCodeが都市リストにある場合、その都市を返す",
    ({ code, name: expectedName }) => {
      expect(findCity(code).name).toBe(expectedName);
    }
  );
  test("引数で渡されたcityCodeが都市リストにない場合、エラーが発生する", () => {
    expect(() => findCity("77")).toThrow(new Error("Not selectable city"));
  });
});
