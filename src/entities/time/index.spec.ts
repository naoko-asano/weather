import { convertTimeForDisplay } from ".";

describe("convertTimeForDisplay", () => {
  test("引数で与えられた値が日時として認識される場合、YYYY/M/D hh:mm:ssの形式で日時を返す", () => {
    expect(convertTimeForDisplay("2023-03-26T21:00")).toBe(
      "2023/3/26 21:00:00"
    );
  });
  test("引数で与えられた値が日時として認識されない場合、undefinedを返す", () => {
    expect(convertTimeForDisplay("hoge")).toBeUndefined();
  });
});
