import { createParams, createApiUrl } from ".";

describe("createParams", () => {
  test("引数で与えられた緯度と経度をもとに、APIにリクエストするためのパラメータを作成する", () => {
    expect(createParams("1", "2")).toBe(
      "?latitude=1&longitude=2&current_weather=true&timezone=Asia/Tokyo"
    );
  });
});

describe("createApiUrl", () => {
  test("引数で与えられた緯度と経度をもとに、APIにリクエストするためのURLを作成する", () => {
    expect(createApiUrl("1", "2")).toBe(
      "https://api.open-meteo.com/v1/forecast?latitude=1&longitude=2&current_weather=true&timezone=Asia/Tokyo"
    );
  });
});
