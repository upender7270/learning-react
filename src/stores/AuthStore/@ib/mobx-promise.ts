import { action } from "mobx";
import { API_FETCHING, API_SUCCESS, API_FAILED } from "@ib/api-constants";
import { APIStatus } from "@ib/api-constants";

function handlePromiseBindWithOnSuccess<T>(
  promise: Promise<T>,
  updateLoadingStatus: (status: APIStatus) => unknown,
  onSuccess: (response: any) => unknown,
  options = { loadingStatus: API_FETCHING }
): Promise<any> {
  const { loadingStatus } = options;

  updateLoadingStatus(loadingStatus || API_FETCHING);

  return promise
    .then(
      action("fulfill-promise", async (data: Object) => {
        const successResponse = onSuccess(data);
        await successResponse;
        updateLoadingStatus(API_SUCCESS);
        return data;
      })
    )
    .catch(
      action("reject-promise", (err: any) => {
        updateLoadingStatus(API_FAILED);
        return Promise.reject(err.message);
      })
    );
}

/**
 * Provides a fluent interface to
 * automatically populate obervable
 * property with promise lifecycle events.
 *
 * @param {Promise.<T>} promise
 *
 * @example
 * getUser() {
 *   bindPromise(auth.getUserById(12)).to(this.user)
 * }
 */

export function bindPromiseWithOnSuccess<T>(
  promise: Promise<T>,
  options = { loadingStatus: API_FETCHING }
): {
  to: (
    loadingCallback: (state: APIStatus) => unknown,
    callback: (response: T | null) => unknown
  ) => Promise<T>;
} {
  return {
    /**
     * By default, the result of promise is directly
     * assigned to the observable.
     * If you want to preprocess, or assign a different
     * field to the property, you can use a callback.
     * @callback processData
     * @param newValue - Promise fulfilment result
     * @param previousValue - Data previously stored in
     * the supplied observableProperty. Can be used to merge
     * previous and current results.
     *
     * @param loadingObservable
     * @param {processData} [callback]
     * @return {Promise.<T>}
     */
    to: (updateLoadingStatus, onSuccess) =>
      handlePromiseBindWithOnSuccess(
        promise,
        updateLoadingStatus,
        onSuccess,
        options
      )
  };
}
