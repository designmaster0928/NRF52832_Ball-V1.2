// Based on: https://dev.to/sobiodarlington/better-error-handling-with-async-await-2e5m

/*
 * Usage Example:
 *
 *  const [response, responseError] = await resolve<{
 *    [key: string]: any;
 *  }>(myAsyncFunction({foo: 'bar'}));
 *
 *  if (responseError) {
 *    throw new Error(responseError;
 *  }
 *
 *  return response;
 *
 */

type Error = any;

export async function resolver<T>(promise: Promise<T>): Promise<[T, Error]> {
  if (!promise || !promise.then) {
    console.error('The argument does not appear to be a Promise');
    return Promise.resolve([
      null as any,
      'The argument does not appear to be a Promise',
    ]);
  }

  return promise
    .then((data: T): [T, Error] => [data, null])
    .catch((err: Error): Promise<[T, Error]> => {
      return Promise.resolve([null as any, err]);
    });
}
