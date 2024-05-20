type Cons<H, T extends readonly any[]> = H extends any ? T extends any ?
  ((h: H, ...t: T) => void) extends ((...r: infer R) => void) ? R : never : never : never;

type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

/**
 *
 *
 * @example
 * ```typescript
 * type OneTwo = OnlyInclude<'one' | 'two'>
 *
 * export const correct: OneTwo = ['one', 'two'];
 * export const missing: OneTwo = ['one']; // error
 * export const mismatch: OneTwo = ['one', 'too']; // error
 * export const excessive: OneTwo = ['one', 'two', 'three']; // error
 * ```
 */
export type OnlyInclude<T, U = T, N extends number = 15> = T extends any ?
  Cons<T, Exclude<U, T> extends infer X ? {
    0: [], 1: OnlyInclude<X, X, Prev[N]>,
  }[[X] extends [never] ? 0 : 1] : never> :
  never;

// export type NoRepeats<T extends readonly any[]> = { [M in keyof T]: { [N in keyof T]:
//   N extends M ? never : T[M] extends T[N] ? any : never
// }[number] extends never ? T[M] : never };
