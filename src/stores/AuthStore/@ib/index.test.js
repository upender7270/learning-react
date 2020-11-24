import { API_FETCHING, API_SUCCESS, API_FAILED } from "@ib/api-constants";
import { bindPromiseWithOnSuccess } from "./mobx-promise";

function successPromise() {
  return Promise.resolve("1000");
}

function failedPromise() {
  return Promise.reject(new Error("error"));
}

describe("Tests for bindPromiseWithOnSuccess", () => {
  it("should return the reponse", () => {
    const promise = successPromise();
    const setAPIStatusMock = jest.fn();
    const setAPIResponseMock = jest.fn();
    //https://jestjs.io/docs/en/asynchronous#promises
    return bindPromiseWithOnSuccess(promise)
      .to(setAPIStatusMock, setAPIResponseMock)
      .then(() => {
        expect(setAPIStatusMock).toHaveBeenCalledTimes(2);
        expect(setAPIResponseMock).toBeCalledWith("1000");
      });
  });

  it("should test if error is thrown ", () => {
    const promise = failedPromise();
    const setAPIStatusMock = jest.fn();
    const setAPIErrorMock = jest.fn();

    return bindPromiseWithOnSuccess(promise)
      .to(setAPIStatusMock, setAPIErrorMock)
      .catch(err => {
        expect(setAPIStatusMock).toHaveBeenCalledTimes(2);
        expect(err).toBe("error");
      });
  });
});
