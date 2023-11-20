export type ContextPublic<T, E> = [Partial<T>, E];

export type ContextPrivate<T> = [
  Partial<T>,
  (state: Partial<T> | ((prevState: Partial<T>) => Partial<T>)) => void,
];
