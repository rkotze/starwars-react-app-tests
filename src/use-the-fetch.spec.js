import { renderHook, act } from "@testing-library/react-hooks";
import { useTheFetch } from "./use-the-fetch";
import { getStarWars } from "./base-fetch";
jest.mock("./base-fetch");

describe("use the fetch", () => {
  it("initial data state is loading and data empty", () => {
    const { result } = renderHook(() => useTheFetch("people"));

    expect(result.current).toStrictEqual({ loading: true, data: null });
  });

  it("data is fetched and not loading", async () => {
    const fakeSWData = { result: [{ name: "Luke Skywalker" }] };
    getStarWars.mockResolvedValue(fakeSWData);
    const { result, waitForNextUpdate } = renderHook(() =>
      useTheFetch("people")
    );

    await waitForNextUpdate();

    expect(getStarWars).toBeCalledWith("people");
    expect(result.current).toStrictEqual({
      loading: false,
      data: fakeSWData
    });
  });
});
